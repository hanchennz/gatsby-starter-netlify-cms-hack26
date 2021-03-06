import React from 'react'
import PropTypes from 'prop-types'
import { BizMarketingTemplate } from '../../templates/biz-marketing-page'

const BizMarketingPagePreview = ({entry, getAsset}) => {
    const imagePanels = entry.getIn(['data', 'image_panels']);
    const panelItems = imagePanels ? imagePanels.toJS() : [];

    const topBannerData = entry.getIn(['data', 'top_banner']);
    const topBanner = topBannerData ? topBannerData.toJS() : {};

    const bottomBannerData = entry.getIn(['data', 'bottom_banner']);
    const bottomBanner = bottomBannerData ? bottomBannerData.toJS() : {};

    const readMore = entry.getIn(['data', 'read_more']);

    const markdown = entry.getIn(['data', 'markdown_test']);

    return (
        <BizMarketingTemplate
            topBanner={topBanner}
            panelItems={panelItems}
            bottomBanner={bottomBanner}
            readMore={readMore}
            markdown={markdown}
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
