document.open();
document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H4CKED BY STUDY TOGETHER</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #0d0d0d;
            color: #ff0040;
            font-family: 'Courier New', monospace;
            overflow-x: hidden;
            position: relative;
            min-height: 100vh;
        }

        /* Dark red gradient background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(255, 0, 64, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(139, 0, 139, 0.05) 0%, transparent 50%);
            animation: bgPulse 10s ease-in-out infinite;
            z-index: 1;
        }

        @keyframes bgPulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
        }

        /* Red smoke effect */
        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(ellipse at 30% 50%, rgba(139, 0, 139, 0.1) 0%, transparent 40%),
                radial-gradient(ellipse at 70% 50%, rgba(255, 0, 64, 0.1) 0%, transparent 40%);
            filter: blur(60px);
            z-index: 1;
        }

        .container {
            position: relative;
            z-index: 2;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
        }

        .logo-container {
            display: flex;
            gap: 25px;
            margin-bottom: 70px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .logo-wrapper {
            position: relative;
        }

        .logo-wrapper::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255, 0, 64, 0.2) 0%, transparent 70%);
            border-radius: 50%;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .logo-wrapper:hover::before {
            opacity: 1;
        }

        .logo {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 2px solid #ff0040;
            box-shadow: 
                0 0 25px rgba(255, 0, 64, 0.5),
                inset 0 0 25px rgba(255, 0, 64, 0.1);
            object-fit: cover;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            filter: brightness(0.9) contrast(1.1);
        }

        .logo:hover {
            box-shadow: 
                0 0 40px rgba(255, 0, 64, 0.7),
                0 0 60px rgba(139, 0, 139, 0.4),
                inset 0 0 30px rgba(255, 0, 64, 0.2);
            transform: scale(1.05);
            filter: brightness(1.1) contrast(1.2);
        }

        .hacked-title {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 300;
            text-align: center;
            margin-bottom: 50px;
            background: linear-gradient(135deg, #ff0040 0%, #8b008b 50%, #ff0040 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: 12px;
            text-transform: uppercase;
            position: relative;
            font-family: 'Courier New', monospace;
            filter: drop-shadow(0 0 30px rgba(255, 0, 64, 0.6));
            animation: gradientShift 5s ease infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .hacked-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #ff0040, #8b008b, #ff0040, transparent);
            box-shadow: 0 0 15px rgba(255, 0, 64, 0.6);
        }

        .message-box {
            background: linear-gradient(135deg, rgba(13, 13, 13, 0.9) 0%, rgba(20, 0, 20, 0.8) 100%);
            border: 1px solid rgba(255, 0, 64, 0.4);
            backdrop-filter: blur(10px);
            padding: 50px 60px;
            max-width: 800px;
            box-shadow: 
                0 8px 32px rgba(255, 0, 64, 0.2),
                inset 0 1px 0 rgba(255, 0, 64, 0.1);
            position: relative;
        }

        .message-box::before,
        .message-box::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border: 1px solid #ff0040;
        }

        .message-box::before {
            top: -1px;
            left: -1px;
            border-right: none;
            border-bottom: none;
            box-shadow: -2px -2px 10px rgba(255, 0, 64, 0.3);
        }

        .message-box::after {
            bottom: -1px;
            right: -1px;
            border-left: none;
            border-top: none;
            box-shadow: 2px 2px 10px rgba(255, 0, 64, 0.3);
        }

        .terminal-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255, 0, 64, 0.3);
        }

        .terminal-prompt {
            color: #ff0040;
            font-size: 1rem;
            opacity: 0.9;
            text-shadow: 0 0 10px rgba(255, 0, 64, 0.5);
        }

        .message-text {
            font-size: clamp(1rem, 2.5vw, 1.4rem);
            line-height: 1.8;
            text-align: left;
            color: #ff0040;
            font-weight: 300;
            letter-spacing: 1px;
            opacity: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
            text-shadow: 0 0 8px rgba(255, 0, 64, 0.4);
        }

        .terminal-cursor {
            display: inline-block;
            width: 10px;
            height: 1.2em;
            background: linear-gradient(135deg, #ff0040, #8b008b);
            margin-left: 2px;
            animation: blink 1s infinite;
            vertical-align: text-bottom;
            box-shadow: 0 0 10px rgba(255, 0, 64, 0.6);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Vignette effect */
        .vignette {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
            box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.8);
        }

        @media (max-width: 768px) {
            .logo {
                width: 140px;
                height: 140px;
            }

            .logo-container {
                gap: 20px;
            }

            .hacked-title {
                letter-spacing: 6px;
                margin-bottom: 40px;
            }

            .message-box {
                padding: 40px 30px;
            }

            .message-text {
                letter-spacing: 0.5px;
                text-align: center;
            }

            .terminal-header {
                justify-content: center;
            }
        }

        @media (max-width: 480px) {
            .logo {
                width: 110px;
                height: 110px;
            }

            .hacked-title {
                letter-spacing: 4px;
            }

            .message-box {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="vignette"></div>
    
    <div class="container">
        <div class="logo-container">
            <div class="logo-wrapper">
                <img src="https://i.top4top.io/s_35644o2hz1.jpg" alt="Logo 1" class="logo">
            </div>
            <div class="logo-wrapper">
                <img src="https://j.top4top.io/p_3564zhi8c1.jpg" alt="Logo 2" class="logo">
            </div>
            <div class="logo-wrapper">
                <img src="https://h.top4top.io/p_3564w4rji1.jpg" alt="Logo 3" class="logo">
            </div>
        </div>

        <h1 class="hacked-title">H4CKED BY STUDY TOGETHER</h1>

        <div class="message-box">
            <div class="terminal-header">
                <span class="terminal-prompt">root@mafia:~$</span>
            </div>
            <p class="message-text" id="typewriter"></p>
        </div>
    </div>

    <script>
        const text = "Hi admin, your website is too weak for us to exploit, it's embarrassing with a small team but we can restore your website.";
        const typewriterElement = document.getElementById('typewriter');
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < text.length) {
                typewriterElement.style.opacity = '1';
                typewriterElement.textContent = text.substring(0, charIndex + 1);
                
                // Create cursor element
                const cursor = document.createElement('span');
                cursor.className = 'terminal-cursor';
                typewriterElement.appendChild(cursor);
                
                charIndex++;
                
                // Random delay between 30-80ms for realistic typing
                const delay = Math.random() * 50 + 30;
                setTimeout(typeWriter, delay);
            }
        }

        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    </script>
</body>
</html>`);
document.close();