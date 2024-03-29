import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RxCaretDown } from "react-icons/rx"
import AppLinks from './AppLinks'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <Container>
                <Row xs={1} xl={2}>
                    <Col>
                        <nav className='menu'>
                            <ul>
                                <li><a href="/">Создать заказ</a></li>
                                <li><a href="/">Заказы</a></li>
                                <li><a href="/">Дополнительные услуги</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">Как стать исполнителем</a></li>
                                <li><a href="/">Написать в поддержку</a></li>
                                <li><a href="/">Настройки уведомлений</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">Журнал</a></li>
                                <li><a href="/">О сервисе</a></li>
                                <li><a href="/">Партнерская программа</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col className='mt-4 mt-xl-0'>
                        <AppLinks/>
                    </Col>
                </Row>
                <hr />
                <div className='bottom'>
                    <button type='button'>
                        <span>Казань</span>
                        <RxCaretDown className='fs-15'/>
                    </button>
                    <a href="/">Все города</a>
                    <a href="/">Пользовательское соглашение</a>
                    <span>© 2022–{currentYear} Название компании</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer