import { Component } from 'react';

import './menu-app.css';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            increse: true,
        }
    }

    gomenuburger = () => {
        this.setState(({increse}) => ({
            increse: !increse,
        }))
    }


    render() {
        const {increse} = this.state;
        const {schet} = this.props;

        let className = 'burger';
        let ClassNameSchet = 'schet';

        if (increse) {
            className += ' opas';
        }

        if (schet < 1) {
            ClassNameSchet += ' opasSchet';
        }

        return (
            <div className='block'>

                <div className={className}>
                <div className='menu'>
                    <div className='burger__content'>
                        <div className='burger__box'>Новая коллекция</div>
                        <div className='burger__box'>Мужская одежда</div>
                        <div className='burger__box'>Женская одежда</div>
                        <div className='burger__box'>Sale</div>
                        <div className='burger__box'>Контактная информация</div>
                        <div className='burger__box'>Адреса магазинов</div>
                    </div>

                    <div className='menu__contact__info'>
                            <div className='block__contact'></div>
                            <div className='block__contact'>
                            <div className='kard'></div>
                            <div className='kard'></div>
                            <div className='kard'></div>
                            </div>
                    </div>
                </div>
                
                <div className='backgoundMenu' onClick={this.gomenuburger} ></div>
                </div>

                <div className='block__menu'>
                    <div className='block__menu__icon' onClick={this.gomenuburger} /><span className='block__menu__text'>Меню</span>
                </div>
                <div className='block__text g'></div>
                <div className='block__column' >
                    <input className='block_icon sertch'type='button'></input>
                    <div className='block_icon'></div>
                    <div className='block_icon'><div className={ClassNameSchet}>{schet}</div></div>
                    <div className='block_icon'></div>
                </div>
            </div>
        )
    }
    
}

export default Menu;