import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/scrape', async (req, res) => {
    try {
        const { keyword } = req.query;
        
        if (!keyword) {
            return res.status(400).json({ error: 'Palavra-chave é obrigatória' });
        }

        const response = await axios.get(`https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const dom = new JSDOM(response.data);
        const document = dom.window.document;

        const products = [];
        const productElements = document.querySelectorAll('[data-component-type="s-search-result"]');

        productElements.forEach(element => {
            try {
                const titleElement = element.querySelector('h2 a span');
                const ratingElement = element.querySelector('span[aria-label*="de 5 estrelas"]');
                const reviewsElement = element.querySelector('span[aria-label*="estrelas"] + span');
                const imageElement = element.querySelector('img.s-image');

                if (titleElement) {
                    const product = {
                        title: titleElement.textContent.trim(),
                        rating: ratingElement ? parseFloat(ratingElement.getAttribute('aria-label').split(' ')[0].replace(',', '.')) : null,
                        reviews: reviewsElement ? parseInt(reviewsElement.textContent.replace(/[^0-9]/g, '')) : 0,
                        imageUrl: imageElement ? imageElement.getAttribute('src') : null
                    };
                    products.push(product);
                }
            } catch (error) {
                console.error('Erro ao processar produto:', error);
            }
        });

        res.json(products);
    } catch (error) {
        console.error('Erro ao fazer scraping:', error);
        res.status(500).json({ error: 'Erro ao fazer scraping da Amazon' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 