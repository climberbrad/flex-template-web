import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import skiingImage from './images/skiing.jpg';
import moabImage from './images/moab.jpg';
import oregonImage from './images/oregon.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Skiing in Colorado',
          skiingImage,
          '?address=Colorado&bounds=40.39289676%2C-105.77001838%2C38.80385231%2C-107.33682386&mapSearch=true'
        )}
        {locationLink(
          'Hiking in Utah',
          moabImage,
          '?address=Moab%2C%20Utah&bounds=39.81604346%2C-109.05985351%2C37.14254407%2C-111.66557235&origin=66.50394779999999%2C25.729390599999988'
        )}
        {locationLink(
          'Mountain biking in Oregon',
          oregonImage,
          '?address=Bend%2C%20Oregon&bounds=bounds=46.49806133%2C-119.22018713%2C41.59176486%2C-124.43162482&origin=66.16594940000002%2C29.12646110000003'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
