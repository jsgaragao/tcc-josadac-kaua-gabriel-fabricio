import './index.scss';

export default function Cabecalho(){
    return(
        <div className='mae-cabecalho'>
            <div className='corpo'>
                <img className='logo' src="/assets/images/logo.png" alt="" />
                <div className='inp'>
                <input className='encontre' type="text" placeholder='ENCONTRE SEU PRODUTO' />
                
                <img className='lupa' src="/assets/images/lupa.png" alt="" />     
</div>

                <div className='itens'>
                    <img className='carrinho' src="/assets/images/carrinho.png" alt="" />

                    <p className='it'>itens (0)
                    </p>
                    </div>     
            </div>

                <div className='secoes'>
                    <div>PISCINAS</div>
                    <div>SAUNAS</div>
                    <div>ILUMINAÇÃO</div>
                    <div>PISOS E REVESTIMENTOS</div>
                </div>

        </div>
    )
}