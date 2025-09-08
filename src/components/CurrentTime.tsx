import { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Cập nhật thời gian mỗi giây
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function để xóa timer khi component unmount
    return () => clearInterval(timer);
  }, []);

  // Format thời gian theo định dạng Việt Nam
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Sử dụng định dạng 24h
    };

    return date.toLocaleString('vi-VN', options);
  };

  // Format thời gian theo định dạng tùy chỉnh
  const formatCustomTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '8px',
      margin: '20px 0',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#333', marginBottom: '15px' }}>
        🕐 Thời gian hiện tại
      </h2>
      
      <div style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '10px'
      }}>
        <strong>Định dạng Việt Nam:</strong>
      </div>
      <div style={{ 
        fontSize: '24px', 
        color: '#2c3e50',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        {formatTime(currentTime)}
      </div>

      <div style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '10px'
      }}>
        <strong>Định dạng tùy chỉnh:</strong>
      </div>
      <div style={{ 
        fontSize: '24px', 
        color: '#e74c3c',
        fontWeight: 'bold',
        fontFamily: 'monospace'
      }}>
        {formatCustomTime(currentTime)}
      </div>

      <div style={{ 
        fontSize: '14px', 
        color: '#7f8c8d',
        marginTop: '15px',
        fontStyle: 'italic'
      }}>
        Cập nhật mỗi giây
      </div>
    </div>
  );
};

export default CurrentTime;
