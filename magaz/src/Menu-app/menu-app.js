import './menu-app.css';

const Menu = () => {
    const sertchB = document.querySelector('.block_icon');
    const blockImg = document.querySelector('.block__text');
    const onSearch = () => {
            blockImg.classList.toggle(".g");
    }

    return (
        <div className='block'>
            <div className='block__menu'>
                <div className='block__menu__icon' /><span className='block__menu__text'>Меню</span>
            </div>
            <div className='block__text g'></div>
            <div className='block__column' >
                <input className='block_icon sertch' onClick={onSearch} type='button'></input>
                <div className='block_icon'></div>
                <div className='block_icon'></div>
                <div className='block_icon'></div>
            </div>
        </div>
    )
}

export default Menu;