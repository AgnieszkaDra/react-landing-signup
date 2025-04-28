import { RxDividerVertical } from "react-icons/rx";
import data, { features } from "../data/data";
import Typography from "../typography/Typography";
import { NavigationLink } from "../ui";

const Pricing = () => {
  const pricing = data.pricing;
  const root = pricing[0];
  const pricingIds = root.childIds;

  return (
    <div className="pricing">
      <div className="pricing__container">
 <Typography name="heading" kind="h3" subkind="title" className="pricing__heading">
    Simple & flexible pricing built for everyone
  </Typography>

  <Typography name="text" kind="p" className="pricing__subheading">
    Start with 14-day free trial. No credit card needed. Cancel at anytime.
  </Typography>

  <ul className="pricing__list">
    {pricingIds?.map((id: number) => {
      const item = pricing[id];
      return (
        <li key={id} className="pricing__item">
          <div className="pricing__header price">
            <div className="price__container">
              <Typography name="text" kind="p" subkind="label" className="price__title">
                {item.title || ''}
              </Typography>

              <div className="price__cost cost">
                <Typography kind="p" name="text" className="cost__symbol">
                  {"$"}
                </Typography>
                <Typography kind="h2" subkind="header-font" name="heading" className="cost__value">
                  {`${item.price}` || ''}
                </Typography>
                <div className="cost__interval">
                  <Typography kind="p" className="">
                    per user
                  </Typography>
                  <Typography kind="p" className="">
                    per month
                  </Typography>
                </div>
              </div>
              <Typography kind="p" className="price__description">
                {item.description || ''}
              </Typography>
            </div>
           
          </div>

          {item.features && (
            <ul className="pricing__features">
              {item.features.map(({ id: featureId, className }) => {
                const feature = features.feature[featureId];
                return (
                  <li key={featureId} className={`pricing__feature ${className || ''}`}>
                    {feature?.description}
                  </li>
                );
              })}
            </ul>
          )}

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
