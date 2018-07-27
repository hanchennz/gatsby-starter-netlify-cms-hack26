import React from 'react'
import PropTypes from 'prop-types'

const ImagePanels = ({panelItems}) => (
    <div className="image-panels">
        {panelItems.map(item => (
            <div key={item.image} className="columns image-panels--panel">
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
                        <h3 className="is-size-2-desktop is-size-4-tablet">{item.title}</h3>
                        <p className="has-text-grey">{item.text}</p>
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
