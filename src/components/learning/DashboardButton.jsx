import React from 'react';

const DashboardButton = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('https://bi-lakehouse-poc.vnpt.vn/api/v1/dashboard/140', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'accept-language': 'en,vi;q=0.9,en-US;q=0.8,vi-VN;q=0.7,fr-FR;q=0.6,fr;q=0.5',
          'cache-control': 'no-cache',
          'pragma': 'no-cache',
          'priority': 'u=1, i',
          'referer': 'https://bi-lakehouse-poc.vnpt.vn/embedded/3880813f-f4b0-4a53-9784-412a0343bdeb?uiConfig=0',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'same-origin',
          'sec-fetch-site': 'same-origin',
          'Cookie': 'session=.eJxVjjtPAzEQhP-La4r1Y73rlAEJilQREhLNyV7vijzEkbukAfHfMaKiGs18mtF8uckWXd_c5rrc9M5Nh-42LteO2VtuXpSjRU6EpTU0q10HVM7gFaEEoJKiR-ZcoGHUlAJ3HixgAC0ATdlTo1Zz9zJWMyvGWNFjMRArkXoTROoxE2BJWqiTG0duqy5_b_ywsi42XeeTvo9AIKhUIRVfgbsaB8wcUanUXzWuaKI4evOhy_Sv_PG06HTcWdqf5pfr-XK_7nn7un2uD-HyeN59uu8fjLRRUw.aEfvYA.4Uh0kx19GrgUejr7UFsiPGK3BXc; session=eyJfZnJlc2giOmZhbHNlLCJvaWRjX2NzcmZfdG9rZW4iOiI5dnRZQWtTdGZ3d0tUdzJPcjdZN2c1aDZpV3c3ZThJaCJ9.aEf2Tg.vXdBzVAQgxYpxLRS-pAboGfm4To',
        },
        credentials: 'include', // Nếu muốn cookie của domain này được gửi kèm
      });

      const data = await response.json();
      alert('Data fetched, check console.');
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to fetch dashboard.');
    }
  };


  return (
    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Fetch Dashboard 140
    </button>
  );
};

export default DashboardButton;
