<script setup>
</script>

<template>
  <div class="glass-container">
      <div class="glass-panel">
      <h1 class="glass-title">毛玻璃效果区域</h1>
      <p class="glass-subtitle">这是一个具有毛玻璃特效的区域，背景使用了浅蓝色渐变。您可以在此区域放置各种组件，内容将具有半透明模糊效果。</p>
      <div class="placeholder-text">
        这里是组件放置区域
    </div>
  </div></div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #a8d8ff 0%, #c2e9fb 100%);
  padding: 20px;
  overflow-x: hidden;
}

.glass-container {
  width: calc(100vw - 40px);
  min-height: calc(100vh - 40px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.glass-panel {
  width: 80vh;
  max-width: 100vh;
  height: 80vh; 
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
}

.glass-content {
  position: relative;
  width: 80vw;
  height: 70vw;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  color: #333;
  transition: all 0.3s ease;
}

.glass-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.glass-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #0066cc, #0099ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 102, 204, 0.1);
}

.glass-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
  max-width: 600px;
  line-height: 1.6;
}

.placeholder-text {
  font-size: 1rem;
  color: #666;
  margin-top: 40px;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.decoration {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;
}

.decoration:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.decoration:nth-child(2) {
  width: 120px;
  height: 120px;
  bottom: 15%;
  right: 10%;
  animation-delay: 2s;
}

.decoration:nth-child(3) {
  width: 60px;
  height: 60px;
  top: 60%;
  left: 15%;
  animation-delay: 4s;
}

.decoration:nth-child(4) {
  width: 100px;
  height: 100px;
  top: 20%;
  right: 15%;
  animation-delay: 1s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .glass-container {
    width: 95%;
    height: 80vh;
  }

  .glass-title {
    font-size: 2.2rem;
  }

  .glass-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .glass-title {
    font-size: 1.8rem;
  }

  .glass-content {
    padding: 25px;
  }
}
</style>