import './katalog.css'
import KatalogItem from '../katalog-item/katalog-item';


const Katalog = ({data}) => {
            const elements = data.map(item => {
                return (
                    <KatalogItem {...item}/>
                )
            })
            return(
                <div className='grow'>
                    <div className='content'>
                    {elements}
                    </div>
                </div>
            )
        
}

export default Katalog;