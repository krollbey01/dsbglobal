// Minimal Chart.js demo data
function makeLine(id, label, data, color){
  const ctx=document.getElementById(id); if(!ctx) return;
  new Chart(ctx,{type:'line',data:{labels:['Pzt','Sal','Çar','Per','Cum','Cmt','Paz'],datasets:[{label:label,data:data,borderColor:color,backgroundColor:color,fill:false,tension:0.3}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}});
}
window.addEventListener('load',()=>{
  makeLine('overviewChart','Teslimatlar',[120,134,132,140,138,150,160],'#7c5cff');
  makeLine('scoreChart','Score',[88,90,91,92,93,94,95],'#2dd4bf');
  makeLine('trendChart','Trend',[30,34,33,35,36,40,42],'#7c5cff');
  makeLine('performanceChart','Performans',[65,70,68,73,75,78,80],'#2dd4bf');
  makeLine('scoreCardChart','ScoreCard',[12,14,13,15,16,14,18],'#7c5cff');
  makeLine('trendAnalysisChart','Trend Analizi',[5,8,6,9,10,11,13],'#2dd4bf');
});