// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加按钮点击效果
    addButtonEffects();
    
    // 添加倒计时功能
    addCountdownTimer();
});

// 按钮点击效果
function addButtonEffects() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // 显示参与成功消息
            showSuccessMessage();
        });
    }
}

// 显示赞赏码弹窗
function showSuccessMessage() {
    // 创建赞赏码弹窗元素
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div class="success-content">
            <h3>🎉 优惠券已领取！</h3>
            <p>感谢您的支持，请扫码赞赏</p>
            <div class="qr-code">
                <img src="assets/赞赏码.jpg" alt="赞赏码" style="width: 200px; height: 200px; border-radius: 10px;">
            </div>
            <p style="font-size: 0.9rem; color: #999; margin-top: 15px;">扫码赞赏后即可使用优惠券</p>
            <button onclick="this.parentElement.parentElement.remove()">关闭</button>
        </div>
    `;
    
    // 添加样式
    message.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    // 添加赞赏码弹窗的CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .success-content {
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            max-width: 300px;
            margin: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .success-content h3 {
            color: #FF0000;
            font-size: 1.5rem;
            margin-bottom: 15px;
        }
        
        .success-content p {
            color: #666;
            margin-bottom: 15px;
            font-size: 0.95rem;
        }
        
        .qr-code {
            margin: 20px 0;
            display: flex;
            justify-content: center;
        }
        
        .qr-code img {
            border: 2px solid #FF0000;
            box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
        }
        
        .success-content button {
            background: #FF0000;
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 20px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 15px;
        }
        
        .success-content button:hover {
            background: #CC0000;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(message);
}

// 倒计时功能
function addCountdownTimer() {
    // 创建倒计时元素
    const countdownSection = document.createElement('section');
    countdownSection.className = 'countdown-section';
    countdownSection.innerHTML = `
        <div class="countdown-content">
            <h3>距离下次疯狂星期四还有</h3>
            <div class="countdown-timer">
                <div class="countdown-item">
                    <span id="days">00</span>
                    <label>天</label>
                </div>
                <div class="countdown-item">
                    <span id="hours">00</span>
                    <label>时</label>
                </div>
                <div class="countdown-item">
                    <span id="minutes">00</span>
                    <label>分</label>
                </div>
                <div class="countdown-item">
                    <span id="seconds">00</span>
                    <label>秒</label>
                </div>
            </div>
        </div>
    `;
    
    // 插入到主内容区域的开始位置
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(countdownSection, mainContent.firstChild);
    
    // 添加倒计时样式
    const countdownStyle = document.createElement('style');
    countdownStyle.textContent = `
        .countdown-section {
            background: #FF0000;
            color: white;
            padding: 25px 20px;
            border-radius: 15px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .countdown-content h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
        }
        
        .countdown-timer {
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        
        .countdown-item {
            background: rgba(255, 255, 255, 0.2);
            padding: 12px;
            border-radius: 8px;
            min-width: 60px;
        }
        
        .countdown-item span {
            display: block;
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .countdown-item label {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        
        @media (min-width: 768px) {
            .countdown-section {
                padding: 30px;
            }
            
            .countdown-content h3 {
                font-size: 1.5rem;
            }
            
            .countdown-timer {
                gap: 20px;
            }
            
            .countdown-item {
                min-width: 80px;
                padding: 15px;
            }
            
            .countdown-item span {
                font-size: 2rem;
            }
        }
    `;
    
    document.head.appendChild(countdownStyle);
    
    // 更新倒计时
    function updateCountdown() {
        const now = new Date();
        const currentDay = now.getDay(); // 0是周日，4是周四
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentSecond = now.getSeconds();
        
        let daysUntilThursday = 4 - currentDay; // 距离周四的天数
        if (daysUntilThursday <= 0) {
            daysUntilThursday += 7; // 如果今天是周四或之后，计算到下周四
        }
        
        let hoursUntilThursday = 24 - currentHour;
        let minutesUntilThursday = 60 - currentMinute;
        let secondsUntilThursday = 60 - currentSecond;
        
        // 更新显示
        document.getElementById('days').textContent = String(daysUntilThursday).padStart(2, '0');
        document.getElementById('hours').textContent = String(hoursUntilThursday).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutesUntilThursday).padStart(2, '0');
        document.getElementById('seconds').textContent = String(secondsUntilThursday).padStart(2, '0');
    }
    
    // 每秒更新倒计时
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
