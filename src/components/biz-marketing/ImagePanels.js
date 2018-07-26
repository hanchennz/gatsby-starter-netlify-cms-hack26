import React from 'react'
import PropTypes from 'prop-types'

const ImagePanels = ({panelItems}) => (
    <div>
        {panelItems.map(item => (
            <div key={item.image} className="columns">
                {
                    item.orientation === 'left' &&
                    <div className="column is-6">
                        <section className="section">
                            <p className="has-text-centered">
                                <img alt="" src={item.image}/>
                            </p>
                        </section>
                    </div>
                }

                <div className="column is-6">
                    <section className="section">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </section>
                </div>

                {
                    item.orientation === 'right' &&
                    <div className="column is-6">
                        <section className="section">
                            <p className="has-text-centered">
                                <img alt="" src={item.image}/>
                            </p>
                        </section>
                    </div>
                }
            </div>
        ))}
    </div>
);

ImagePanels.propTypes = {
    panelItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            orientation: PropTypes.string,
        })
    ),
};

export default ImagePanels
