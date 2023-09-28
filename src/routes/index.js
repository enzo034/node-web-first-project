import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Node Web'
    });
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Node Web - About me'
    });
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Node Web - Contact'
    });
})

export default router