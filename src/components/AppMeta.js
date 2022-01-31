import { Helmet } from 'react-helmet-async';
import { PropTypes } from 'prop-types';

function AppMeta(props) {
  const locales = {
    en: 'en_US',
    ko: 'ko_KR',
  };
  const lang = locales[props.locale] || locales['ko'];
  const title = props.title || 'Brand | page';
  const description = props.description || null;
  const keyword = props.description || null;

  if (process.env.NODE_ENV === 'test') return null;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keyword && <meta name="keyword" content={keyword} />}
    </Helmet>
  );
}

AppMeta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppMeta;
