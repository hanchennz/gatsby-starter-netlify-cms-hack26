import React from 'react'
import PropTypes from 'prop-types'
import { BizMarketingTemplate } from '../../templates/biz-marketing-page'

const BizMarketingPagePreview = ({entry, getAsset}) => {
    const imagePanels = entry.getIn(['data', 'image_panels']);
    const panelItems = imagePanels ? imagePanels.toJS() : [];

    return (
        <BizMarketingTemplate
            panelItems={panelItems}
        />
    );
};

BizMarketingPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default BizMarketingPagePreview
