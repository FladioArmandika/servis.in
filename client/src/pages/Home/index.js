import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, ButtonPrimary } from '../../components'

const Home = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-md-6">
                        <ButtonPrimary>dwdaw</ButtonPrimary>
                    </div>
                    <div className="col-md-6">
                        dawdwa
                    </div>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: state.user.name
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
