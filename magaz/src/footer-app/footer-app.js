import './footer-app.css';


const Footer = () => {
        return(
            <div className='growFooter'>
                <div className='contentFooter'>
                    <div className='growFooter__description'>
                        <div className='growFooter__img'></div>
                        <div className='growFooter__title'>О магазине Mono</div>
                        <div className='growFooter__text'>Тут вы можете добавить
                        небольшое описание о вашем интернет-магазине. Какие у вас есть
                        плюсы и можете добавить интересные факты о магазине</div>
                        <div className='growFooter__a'><a href='' id='Footer__a'>Подробнее</a></div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='footer__adres'>
                    <div className='footer__adres__title'>+7 800 555-10-61 | +7 495 649-83-14</div>
                    <div className='footer__adres__title'>г. Москва, Новорязанская ул., 18, стр. 11</div>
                    <div className='footer__adres__title'>Интернет-магазин создан: BigBoiSkini</div>
                    </div>
                    <div className='footer__adres'><div className='footer__img'></div></div>
                    <div className='footer__adres'>
                        <div className='footer__adres__img'>
                            <div className='imgF'></div>
                            <div className='imgF'></div>
                            <div className='imgF'></div>
                        </div>
                        <div className='footer__adres__img'>
                            <div className='kard'></div>
                            <div className='kard'></div>
                            <div className='kard'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Footer;