const ItemsFilter = () => {
    return(
        <div className="btn-group" role="group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
            <label className="btn btn-outline-info" htmlFor="btnradio1">Всё</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Активное</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
            <label className="btn btn-outline-success" htmlFor="btnradio3">Сделанное</label>
        </div>
    )
}

export default ItemsFilter;