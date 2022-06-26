
import React from 'react';
import AvastHover from './AvastHover';

 
const AvastInformations = () => {
  const accordionData = [
    {
      title: 'Why should I use Avast Secure Browser?',
      content: "Avast Secure Browser brings a level of privacy and protection to your browsing experience most browsers can’t compete with. With Avast Secure Browser, you can:",
      list:[
        'Find and block the hundreds of invisible ad-tracking cookies websites have set up to follow you online.',
        ' Boost your productivity using our innovative tab grouping system, which allows you to neatly sort your many, many open tabs.',
        ' Enjoy one of the best ad blockers currently available on the web, customizable to fit your needs.',
        ' Use our built-in integration with Avast SecureLine VPN to hide your IP address and encrypt your connection effortlessly.'
      ]
    },
    {
      title: 'What makes a browser good for private browsing?',
      content: ` When it comes to private browsing, you should look for a browser that offers expanded privacy features. Just about every browser offers incognito mode and ‘Do Not Track’ (DNT) requests, but for real privacy, you should seek a browser that has built-in VPN integration, tools to detect and stop ad tracking, forced encryption, and other ways to ensure your online business is your business alone.`
    },
    {
      title: 'What makes a browser secure?',
      content: `If you’re looking for the best browsers for security, you should look for one that’s been made by security experts, and one that comes loaded with built-in tools that will keep you safe from online threats like phishing sites, web tracking, and malware.`
    },
    {
      title: 'How safe is Avast Secure Browser?',
      content: `It’s the safest browser there is! By blocking phishing sites, harmful download links, and encrypting your connection, Avast Secure Browser provides an extra layer of defense for the web. Think of it as your first line of defense, while a powerful antivirus is the core of your protection.`
    },
    {
      title: 'How easy is Avast Secure Browser to use?',
      content: `It’s easy to set up Avast Secure Browser. All the security and privacy tools that it comes with are ready to go from the moment you start up the browser, and they can be managed effortlessly through our easy-to-use settings page. Plus, Avast Secure Browser is compatible with other Chrome-based add-ons, so you can further customize your browsing experience to your liking via the Chrome Web Store.`
    }

  ];
 
  return (
    <div className='avast_Informations_Nav'>
        <div className='avast_informations'>
            <h2 className='avast_Header'> You may also be wondering… </h2>
                < div className="avast_Informations_Text">
                    {accordionData.map((elem) => (
                    <AvastHover elem={elem}/>
                    ))}
                </div>
                <div className='suport_center'> <span> Visit our <a href=''>  Support Center  </a> for more FAQs </span> </div>
        </div>
    </div>
  );
};
 
export default AvastInformations;