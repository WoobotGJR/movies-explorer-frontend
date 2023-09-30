import './Techs.css'

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__introduction-title'>7 технологий</h3>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__dev-stack'>
                <div className='techs__dev-stack_item'>HTML</div>
                <div className='techs__dev-stack_item'>CSS</div>
                <div className='techs__dev-stack_item'>JS</div>
                <div className='techs__dev-stack_item'>React</div>
                <div className='techs__dev-stack_item'>Git</div>
                <div className='techs__dev-stack_item'>Express.js</div>
                <div className='techs__dev-stack_item'>mongoDB</div>
            </div>
        </section>
    )
}

export default Techs