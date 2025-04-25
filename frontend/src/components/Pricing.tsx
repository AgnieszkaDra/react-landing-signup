import data, { features } from "../data/data";
import Typography from "../typography/Typography";
import { NavigationLink } from "../ui";

const Pricing = () => {
  const pricing = data.pricing;
  const root = pricing[0];
  const pricingIds = root.childIds;

  return (
    <div className="pricing">
      <Typography
        kind="h3"
        text="Simple & flexible pricing built for everyone"
        className="pricing__heading"
      />
      <Typography
        kind="p"
        text="Start with 14-day free trial. No credit card needed. Cancel at anytime."
        className="pricing__subheading"
      />

      <ul className="pricing__list">
        {pricingIds?.map((id: number) => {
          const item = pricing[id];
          return (
            <li key={id} className="pricing__item">
              <Typography kind="h4" text={item.title || ''} className="pricing__title" />
              <Typography kind="p" text={item.description || ''} className="pricing__desc" />

              {item.price !== undefined && (
                <Typography kind="p" text={`$${item.price}/mo`} className="pricing__price" />
              )}

              {item.features && (
                <ul className="pricing__features">
                  {item.features.map(({ id: featureId, className }) => {
                    const feature = features.feature[featureId];
                    return (
                      <li
                        key={featureId}
                        className={`pricing__feature ${className || ''}`}
                      >
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
  );
};

export default Pricing;
