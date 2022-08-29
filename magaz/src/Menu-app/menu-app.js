import './menu-app.css';

const Menu = () => {
    return (
        <div className='block'>
            <div className='block__menu'>
                <div className='block__menu__icon' /><span className='block__menu__text'>Меню</span>
            </div>
            <div className='block__text'>MONO</div>
            <div className='block__column' >
                <div className='block_icon sertch' ></div>
                <div className='block_icon people' ></div>
                <div className='block_icon telega' ></div>
                <div className='block_icon like' ></div>
            </div>
        </div>
    )
}

export default Menu;