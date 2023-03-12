import Icon01d from './img/icons/01d.png';
import Icon01n from './img/icons/01n.png';
import Icon02n from './img/icons/02n.png';
import Icon02d from './img/icons/02d.png';
import Icon03d from './img/icons/03d.png';
import Icon04d from './img/icons/04d.png';
import Icon09d from './img/icons/09d.png';
import Icon10d from './img/icons/10d.png';
import Icon11d from './img/icons/11d.png';
import Icon13d from './img/icons/13d.png';
import Icon50d from './img/icons/50d.png';

const iconsProcessor = (icon) => {
  if (icon === '01d') {
    const icon = Icon01d;
    return icon;
  } if (icon === '02d') {
    const icon = Icon02d;
    return icon;
  } if (icon === '03d' || icon === '03n') {
    const icon = Icon03d;
    return icon;
  } if (icon === '04d' || icon === '04n') {
    const icon = Icon04d;
    return icon;
  } if (icon === '09d' || icon === '09n') {
    const icon = Icon09d;
    return icon;
  } if (icon === '10d' || icon === '10n') {
    const icon = Icon10d;
    return icon;
  } if (icon === '11d' || icon === '11n') {
    const icon = Icon11d;
    return icon;
  } if (icon === '50d' || icon === '50n') {
    const icon = Icon50d;
    return icon;
  }
  if (icon === '13d' || icon === '13n') {
    const icon = Icon13d;
    return icon;
  } if (icon === '01n') {
    const icon = Icon01n;
    return icon;
  } if (icon === '02n') {
    const icon = Icon02n;
    return icon;
  }
  return null;
};

export default iconsProcessor;