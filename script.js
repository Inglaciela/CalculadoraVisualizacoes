
function somar() {
    let a = window.document.getElementById('anúncio').value;
    let b = window.document.getElementById('valor').value;
    let res = window.document.getElementById('btn')
    let res1 = window.document.getElementById('btn1')
    let res2 = window.document.getElementById('btn2')
    let s = b * 30
    let s1 = s / 12
    let s2 = s / 20
    let s3 = s2 / 3 * 4
    let s4 = s3 * 40
    let s5 = s + s4
    if (a == ""){
      alert("[ATENÇÃO] Nome do Anúncio não pode estar em branco. Favor preenchê-lo!");
    }
    else if (b == ""){
      alert("[ATENÇÃO] O valor do Investimento não pode estar em branco. Favor preenchê-lo!");
    }
    else{
    res.innerHTML = `RESULTADO!` 
    res1.innerText = ` ${a}`
    res2.innerText = `Teve APROXIMADAMENTE:
    R$ ${b} em Investimentos
    E: ${s5} Visualizações (alcance) geral.`
    } 
  }