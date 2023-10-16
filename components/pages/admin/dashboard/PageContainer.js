import React from 'react'
import Container from './Container';

 const PageContainer = ({
    text,
    icon = "home",
    link,
    imageData,
    customLink,
  }) => {
    link = `/admin/dashboard/${link}`;
  
    if (customLink) link = customLink;
  
    return (
      <Container imageData={imageData} text={text} icon={icon} link={link} />
    );
  };
  export default PageContainer