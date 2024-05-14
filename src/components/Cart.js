import '../style/Cart.css'

function Cart(){
   let fleur1 =10;
   let fleur2 =20;
   let fleur3 =20;
    return(
        <div className="lmj-cart">
            <h3>Pannier</h3>
            <ul>
                <li>tulipe: {fleur1} $</li>
                <li>rose: {fleur2} $</li>
                <li>violette: {fleur3} $</li>
            </ul>
            <p>TOTAL: {fleur1+fleur2+fleur3} $</p>
        </div>
    )
}

export default Cart
