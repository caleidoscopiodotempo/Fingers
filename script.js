function updateAffinity(faction, change) {
    // valores
    let current = Number(localStorage.getItem(`affinity_${faction}`)) || 0;
    let newValue = Math.min(100, Math.max(0, current + change));
    
    // local storage pra variar
    localStorage.setItem(`affinity_${faction}`, newValue);

    // manter as atualizações
    const container = document.querySelector(`[data-faction="${faction}"]`);
    const bar = container.querySelector('.progressBar');
    const text = container.querySelector('.statusText');
    
    bar.style.width = newValue + '%';
    text.innerText = `Affinity Level: ${newValue}%`;
    
    // cores
    if (newValue < 30) bar.style.backgroundColor = '#5d4037';
    else if (newValue < 60) bar.style.backgroundColor = '#7b1fa2';
    else if (newValue < 90) bar.style.backgroundColor = '#c2185b';
    else bar.style.backgroundColor = '#d32f2f';
}

// iniciar todos abrindo
['index', 'ring', 'middle', 'thumb'].forEach(f => updateAffinity(f, 0));