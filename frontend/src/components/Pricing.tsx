import { RxDividerVertical } from 'react-icons/rx';
import data, { features } from '../data/data';
import Typography from '../typography/Typography';
import CheckIcon from '../assets/CheckIcongreen.png';
import { Button, NavigationLink } from '../ui';

const Pricing = () => {
  const pricing = data.pricing;
  const root = pricing[0];
  const pricingIds = root.childIds;

  return (
    <div className="pricing">
      <div className="pricing__container">
        <h3 className="h3 heading title pricing__heading">
          Simple & flexible pricing built for everyone
        </h3>
        <p className="p text pricing__subheading">
          Start with 14-day free trial. No credit card needed. Cancel at anytime.
        </p>
        <ul className="pricing__list">
          {pricingIds?.map((id: number) => {
            const item = pricing[id];

            return (
              <li key={id} className="pricing__item">
                <div className={`pricing__header price ${item.className || ''}`}>
                  <div className="price__container">
                    <p className="p text label price__title">{item.title || ''}</p>
                    <div className="price__cost cost">
                      <p className="p text label cost__symbol">$</p>
                      <h2 className="h2 heading header-font cost__value">{`${item.price}` || ''}</h2>
                      <div className="cost__interval">
                        <p className="p text">per user</p>
                        <p className="p text">per month</p>
                      </div>
                    </div>
                    <p className="p text price__description">{item.description || ''}</p>
                  </div>
                </div>

                <ul className="pricing__features">
                  {item.features?.map(({ id: featureId, className }) => {
                    const feature = features.feature[featureId];
                    const isDisabled = className === 'feature--disabled';

                    return (
                      <li key={featureId} className={`pricing__feature feature ${className || ''}`}>
                        {!isDisabled && (
                          <img src={CheckIcon} alt="Check Icon" className="feature__check-icon" />
                        )}
                        <p className={`p text paragraph feature__description ${className || ''}`}>
                          {feature?.description || ''}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  text="Start Free Trial"
                  backgroundColor="act-third"
                  className={`buttons button middle price__button ${item.className}`}
                />

                {/* Uncomment if needed */}
                {/* {item.path && (
                  <NavigationLink to={item.path} className="pricing__cta">
                    {() => "Choose Plan"}
                  </NavigationLink>
                )} */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
