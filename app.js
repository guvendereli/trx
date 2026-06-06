const valueSections = [
  {
    id: 'hvp-objects',
    title: 'Değer Profili 1: Nesneler / Durumlar',
    instruction: 'En iyi / en değerli hissettiren ifadeden en kötü / en değersiz hissettiren ifadeye doğru sıralayın.',
    items: ['Yeni bir araba','Bilimsel bir deney','Yanlış anlaşılma','Büyük bir hata','Hurdaya dönmüş bir araba','İyi bir davranış için verilen ödül','Şehir suyunu zehirlemek','Masum bir kişiyi hapsetmek','Hatalı bir elektrik devresi','Sevgi göstergesi','Sevgilinin sarılması','Bir kişiye ölene kadar işkence etmek','Macera dolu bir yaşam','Akıl sağlığı yerinde olmayan biri','Montaj hattı','Fuhuş','Adalet','Cesaret madalyası']
  },
  {
    id: 'hvp-self',
    title: 'Değer Profili 2: Kişisel İfadeler',
    instruction: 'Bugünkü durumunuza göre en çok katıldığınız ifadeden en az katıldığınız ifadeye doğru sıralayın.',
    items: ['İşimi seviyorum; bana iyi geliyor.','Evren olağanüstü uyumlu bir sistemdir.','Dünya bana pek anlamlı gelmiyor.','Ne kadar çok çalışırsam çalışayım, her zaman hayal kırıklığı yaşayacağım.','Çalışma koşullarım kötü ve işimi olumsuz etkiliyor.','Dünyada kendimi evimde hissediyorum.','İşimden nefret ediyorum.','Yaşamım dünyaya zarar veriyor.','İşim dünyaya hiçbir katkı sağlamıyor.','İşim içimdeki en iyiyi ortaya çıkarıyor.','Kendim olmayı seviyorum.','Kendim olmaktan nefret ediyorum.','İşimi seviyorum.','Evrendeki anlam eksikliği beni rahatsız ediyor.','Dünyadaki yerimi ne kadar iyi anlarsam, işimde o kadar iyi olurum.','İşim beni mutsuz ediyor.','Dünyanın güzelliğini seviyorum.','İşim dünyanın güzelliğine ve uyumuna katkı sağlar.']
  }
];

const motivatorSections = [
  { id:'mot-1', title:'En sevdiğim konular', items:['Matematik / Fen Bilimleri','Siyaset Bilimi','Etik / İlkeler','Güzel Sanatlar','Finansal Planlama','İnsancıllık / Yardımseverlik'] },
  { id:'mot-2', title:'Kişisel ilgi alanlarım', items:['Kendi kaderimi kontrol etmek','İnançlarımı korumak','Güzelliği veya doğayı takdir etmek','Finansal güvence elde etmek','Başkalarına hizmet etmek','Bilgimi geliştirmek'] },
  { id:'mot-3', title:'Keyif aldığım boş zaman aktiviteleri', items:['Gönüllü çalışmalar','Yeni kavramlar öğrenmek','Başkalarına mentorluk yapmak ve onları organize etmek','Para yatırmak / para harcamak','Müze veya sergilere gitmek','Gelenekleri olan gruplara katılmak'] },
  { id:'mot-4', title:'Benim için kişisel motivasyon kaynakları', items:['Lider olmak','Eğitime devam etmek','Geleneksel değerler','Başkalarına yardım etmek','Net varlığımı artırmak','Uyum ve birlik'] },
  { id:'mot-5', title:'Kariyer hedeflerim şunları içerir', items:['Çevresel faaliyetler','Araştırma','Bir iş kurmak','Başkalarına liderlik etmek','Adaleti sağlamak','Sosyal hizmetler'] },
  { id:'mot-6', title:'Kişisel gelişim planım şunları içerir', items:['İnançlarımı keşfetmek','Başkalarına yardım etmek','Liderlik rolleri','Emeklilik için güvence','Ek eğitim','Kişisel çevremi güzelleştirmek'] },
  { id:'mot-7', title:'Bana büyük miktarda para verilseydi', items:['Çevreyi güzelleştirirdim','Seçkin bir kulübe / organizasyona katılırdım','Bir kısmını hayır işlerine bağışlardım','Bir kısmını biriktirir / yatırıma yönlendirirdim','Bilgi kazanmak için kurslara katılırdım','İnançlarımı destekleyen bir gruba bağış yapardım'] },
  { id:'mot-8', title:'Vergi gelirlerimizin şunlara harcanması gerektiğini düşünüyorum', items:['Evsizlere yardım','Askeriye / Savunma','Yeni teknoloji','Sanatın desteklenmesi','Verimliliğin artırılması','Adalet'] },
  { id:'mot-9', title:'Rol model olarak hayranlık duyduğum kişiler', items:['İnsancıl kişiler / yardımseverler','Askerî liderler','Girişimciler','Sanatçılar','Bilim insanları','Etik liderler'] },
  { id:'mot-10', title:'Topluma katkıda bulunmak istediğim yol', items:['Hastalara ve dezavantajlı kişilere yardım etmek','İş insanı olmak','Bekleneni yapmak','Doğal kaynakları korumak','Gerçekleri keşfetmek','Toplum lideri olmak'] },
  { id:'mot-11', title:'Kişisel hedeflerim', items:['Başkalarına yardım etmek','Seçilmiş bir kamu görevlisi olmak','Ekonomik özgürlük','Yeni bilgiler keşfetmek','Sanatsal ifade','İnançlarımı paylaşmak'] },
  { id:'mot-12', title:'Dış ilgi alanlarım', items:['Yeni fikirleri araştırmak ve test etmek','Çevreyi korumak','Toplum projeleri','Yarı zamanlı iş','Politika','Manevi / ruhsal faaliyetler'] }
];

const discGroups = [
  ['Hevesli, coşkulu','Halinden memnun, tatmin olmuş','Olumlu, kendinden emin','Barışçıl, sakin'],
  ['Dikkatli, hesapçı','Cesur, gözü pek','Destekleyici','Cazibeli, hoş'],
  ['Dışavurumcu','Cesur, risk alan','Diplomatik, ince davranışlı','Tatmin olmuş, halinden memnun'],
  ['Saygılı, saygı gösteren','Öncü, keşfedici, girişimci','İyimser','Uyum sağlayan, memnun etmeye istekli, yardıma hazır'],
  ['İstekli, uyumlu','Hevesli, sabırsız','Yöntemli, sistemli','Neşeli, canlı, coşkulu'],
  ['Mantıklı','İtaatkâr, söyleneni yapan, görev bilinci olan','Yenilmez, kararlı','Oyuncu, hareketli, eğlenceli'],
  ['Maceracı, risk almaya istekli','Analitik','İçten, sıcak, arkadaş canlısı','Ölçülü, aşırılıklardan kaçınan'],
  ['İnsanlarla kolay kaynaşan, başkalarıyla birlikte olmaktan hoşlanan','Yapılandırılmış / sistemli','Dinç, enerjik','Hoşgörülü, başkalarının davranışlarına toleranslı'],
  ['Rekabetçi, kazanmaya odaklı','Düşünceli, ilgili, özenli','Dışa dönük, eğlenmeyi seven, sosyal','Uyumlu, geçimli'],
  ['Atılgan, meydan okuyan, harekete geçen','Ortamın neşesi, dışa dönük, eğlendirici','Kolay kandırılabilen, başkaları tarafından kolayca kullanılabilen','Korkulu, çekingen'],
  ['Teşvik edici, harekete geçirici','Anlayışlı, şefkatli, empatik','Hoşgörülü','Agresif, iddialı'],
  ['Konuşkan','Kontrollü, kendini tutan','Geleneksel, işleri alışılmış şekilde yapan','Kararlı, kesin, net'],
  ['Disiplinli, özdenetimli','Cömert, paylaşmaya istekli','Hareketli, jest ve mimiklerle kendini ifade eden','Israrcı, vazgeçmeyen'],
  ['Sosyal, başkalarının yanında olmaktan hoşlanan','Sabırlı, istikrarlı, ölçülü','Kendine güvenen, bağımsız','Yumuşak konuşan, sakin, çekingen'],
  ['Nazik, kibar','İkna edici','Alçakgönüllü, çekingen, mütevazı','Manyetik, insanları kendine çeken'],
  ['Etkileyici, cezbedici','Nazik, vermeye veya yardım etmeye istekli','Kabullenen, geri çekilen','Güçlü karakterli, etkili'],
  ['Arkadaş canlısı, birlikte olması kolay','Rahat, kolay uyum sağlayan','Açık sözlü, özgürce ve cesurca konuşan','Kontrollü, çekingen, kendini tutan'],
  ['Gerçeklere dayalı','Yardımsever, destek olmaya istekli','Güçlü iradeli','Neşeli, keyifli'],
  ['Çekici, cazibeli, insanları kendine çeken','Sistematik','İnatçı, boyun eğmeyen','Hoşa giden, memnun edici'],
  ['Huzursuz, dinlenmekte veya rahatlamakta zorlanan','Komşu canlısı, arkadaşça','Popüler, birçok kişi tarafından sevilen','Düzenli, tertipli'],
  ['Meydan okuyan, iddialı','Eleştirel düşünen','Rahat, fazla resmî olmayan','Neşeli, tasasız'],
  ['Cesur, korkusuz','İlham veren, motive eden','Yüzleşmeden kaçınan','Sessiz, sakin'],
  ['Tedbirli, ihtiyatlı, dikkatli','Kararlı, net, tutumundan dönmeyen','İkna edici, güven veren','İyi huylu, hoş, geçimli'],
  ['Şakacı, neşeli','Organize','Gözü pek, cesur, pervasız','Dengeli, sakin, kolay heyecanlanmayan']
];

function createRankCard(section, type){
  const card = document.createElement('article');
  card.className = 'rank-card';
  card.dataset.rankId = section.id;
  card.dataset.rankType = type;
  card.innerHTML = `<div class="rank-card-header"><h3>${section.title}</h3><p>${section.instruction || 'Kutuları sürükleyerek sıralayın.'}</p></div>`;
  const ul = document.createElement('ol');
  ul.className = 'sortable';
  ul.dataset.rankId = section.id;
  section.items.forEach((text, index) => ul.appendChild(createRankItem(text, index)));
  card.appendChild(ul);

  const confirm = document.createElement('label');
  confirm.className = 'rank-confirm';
  confirm.innerHTML = `<input type="checkbox" data-rank-confirm="${section.id}" required> Bu listedeki sıralamamı tamamladım ve onaylıyorum.`;
  confirm.querySelector('input').addEventListener('change', updateCompletion);
  card.appendChild(confirm);

  makeSortable(ul);
  return card;
}

function createRankItem(text, index){
  const li = document.createElement('li');
  li.className = 'rank-item';
  li.draggable = true;
  li.dataset.value = text;
  li.innerHTML = `<span class="rank-text">${text}</span><span class="move-actions" aria-label="Sıralama kontrolleri"><button type="button" class="move-up" aria-label="Yukarı taşı">↑</button><button type="button" class="move-down" aria-label="Aşağı taşı">↓</button></span>`;
  li.querySelector('.move-up').addEventListener('click', () => moveItem(li, -1));
  li.querySelector('.move-down').addEventListener('click', () => moveItem(li, 1));
  return li;
}

function markRankingChanged(list){
  const rankId = list.dataset.rankId;
  const confirm = document.querySelector(`input[data-rank-confirm="${rankId}"]`);
  if(confirm) confirm.checked = false;
}

function moveItem(li, direction){
  const sibling = direction < 0 ? li.previousElementSibling : li.nextElementSibling;
  if(!sibling) return;
  if(direction < 0) li.parentElement.insertBefore(li, sibling);
  else li.parentElement.insertBefore(sibling, li);
  markRankingChanged(li.parentElement);
  updateCompletion();
}

function makeSortable(list){
  list.addEventListener('dragstart', e => {
    const item = e.target.closest('.rank-item');
    if(!item) return;
    item.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  list.addEventListener('dragend', e => {
    const item = e.target.closest('.rank-item');
    if(item) item.classList.remove('dragging');
    markRankingChanged(list);
    updateCompletion();
  });
  list.addEventListener('dragover', e => {
    e.preventDefault();
    const after = getDragAfterElement(list, e.clientY);
    const dragging = document.querySelector('.dragging');
    if(!dragging) return;
    if(after == null) list.appendChild(dragging);
    else list.insertBefore(dragging, after);
  });
}

function getDragAfterElement(container, y){
  const draggableElements = [...container.querySelectorAll('.rank-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if(offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function renderRankings(){
  const valueRoot = document.getElementById('valueProfile');
  valueSections.forEach(section => valueRoot.appendChild(createRankCard(section, 'value')));
  const motivatorRoot = document.getElementById('motivators');
  motivatorSections.forEach(section => motivatorRoot.appendChild(createRankCard(section, 'motivator')));
}

function renderDisc(){
  const root = document.getElementById('discGroups');
  discGroups.forEach((items, groupIndex) => {
    const card = document.createElement('article');
    card.className = 'disc-card';
    card.dataset.group = groupIndex + 1;
    card.innerHTML = `<div class="disc-card-head"><h3>Grup ${groupIndex + 1}</h3><span class="disc-status">Eksik</span></div>`;
    const options = document.createElement('div');
    options.className = 'disc-options';
    items.forEach((text, itemIndex) => {
      const row = document.createElement('div');
      row.className = 'disc-option';
      row.innerHTML = `<span class="disc-option-text">${text}</span>
        <label class="choice"><input type="radio" name="disc-${groupIndex}-most" value="${itemIndex}" required> En çok</label>
        <label class="choice"><input type="radio" name="disc-${groupIndex}-least" value="${itemIndex}" required> En az</label>`;
      options.appendChild(row);
    });
    card.appendChild(options);
    root.appendChild(card);
  });
  root.addEventListener('change', e => {
    const input = e.target;
    if(input.type !== 'radio') return;
    const [_, groupIndex, kind] = input.name.split('-');
    const oppositeKind = kind === 'most' ? 'least' : 'most';
    const opposite = document.querySelector(`input[name="disc-${groupIndex}-${oppositeKind}"][value="${input.value}"]`);
    if(opposite && opposite.checked) opposite.checked = false;
    updateCompletion();
  });
}

function collectRankings(sections){
  return sections.map(section => ({
    title: section.title,
    items: [...document.querySelectorAll(`[data-rank-id="${section.id}"] .rank-item`)].map(li => li.dataset.value)
  }));
}

function collectDisc(){
  return discGroups.map((items, groupIndex) => {
    const most = document.querySelector(`input[name="disc-${groupIndex}-most"]:checked`);
    const least = document.querySelector(`input[name="disc-${groupIndex}-least"]:checked`);
    return {
      group: groupIndex + 1,
      most: most ? items[Number(most.value)] : '',
      least: least ? items[Number(least.value)] : ''
    };
  });
}

function validationState(){
  const requiredFields = [...document.querySelectorAll('#surveyForm input[required]')].filter(input => input.type !== 'radio');
  const fieldsDone = requiredFields.every(input => input.value.trim());
  const disc = collectDisc();
  const discDone = disc.every(row => row.most && row.least && row.most !== row.least);
  const totalDiscAnswered = disc.filter(row => row.most && row.least && row.most !== row.least).length;
  const rankLists = [...document.querySelectorAll('.sortable')];
  const rankConfirms = [...document.querySelectorAll('[data-rank-confirm]')];
  const ranksPopulated = rankLists.every(list => list.querySelectorAll('.rank-item').length > 0);
  const ranksDone = ranksPopulated && rankConfirms.every(input => input.checked);
  const totalRanksConfirmed = rankConfirms.filter(input => input.checked).length;
  return { fieldsDone, discDone, ranksDone, totalRanksConfirmed, rankTotal: rankConfirms.length, totalDiscAnswered, discTotal: discGroups.length, complete: fieldsDone && discDone && ranksDone };
}

function updateDiscStatuses(){
  document.querySelectorAll('.disc-card').forEach((card, index) => {
    const most = document.querySelector(`input[name="disc-${index}-most"]:checked`);
    const least = document.querySelector(`input[name="disc-${index}-least"]:checked`);
    const status = card.querySelector('.disc-status');
    const done = most && least && most.value !== least.value;
    status.textContent = done ? 'Tamam' : 'Eksik';
    status.classList.toggle('done', !!done);
  });
}

function updateCompletion(){
  updateDiscStatuses();
  const state = validationState();
  const submit = document.getElementById('submitBtn');
  submit.disabled = !state.complete;
  const participantScore = state.fieldsDone ? 1 : 0;
  const totalSteps = 1 + state.discTotal + state.rankTotal;
  const completed = participantScore + state.totalDiscAnswered + state.totalRanksConfirmed;
  const percentage = Math.round((completed / totalSteps) * 100);
  document.getElementById('progressBar').style.width = `${state.complete ? 100 : percentage}%`;
  document.getElementById('completionText').textContent = state.complete
    ? 'Tüm bölümler tamamlandı. PDF yanıtlarınızı oluşturabilirsiniz.'
    : `Onaylanan sıralama: ${state.totalRanksConfirmed}/${state.rankTotal}. Tamamlanan DISC grubu: ${state.totalDiscAnswered}/${state.discTotal}. Tüm sıralamaları onaylayıp DISC seçimlerini tamamlayınca gönderim açılır.`;
}

function participantData(){
  return {
    adSoyad: document.getElementById('fullName').value.trim(),
    eposta: document.getElementById('email').value.trim(),
    kurum: document.getElementById('company').value.trim(),
    pozisyon: document.getElementById('position').value.trim(),
    tarih: new Date().toLocaleString('tr-TR')
  };
}

function generatePdf(){
  const state = validationState();
  if(!state.complete){
    document.getElementById('formError').textContent = 'Lütfen katılımcı bilgilerini doldurun, tüm sıralamaları onaylayın ve her DISC grubu için farklı “en çok” ve “en az” seçimleri yapın.';
    updateCompletion();
    return;
  }
  document.getElementById('formError').textContent = '';

  const data = {
    participant: participantData(),
    valueProfile: collectRankings(valueSections),
    motivators: collectRankings(motivatorSections),
    disc: collectDisc()
  };

  if(!(window.pdfMake && window.pdfMake.createPdf)){
    const win = window.open('', '_blank');
    win.document.write(`<html><head><title>TriMetrix Yanıtları</title><style>body{font-family:Arial,sans-serif;padding:32px;line-height:1.5} h1{color:#0f5f67} h2{margin-top:28px} li{margin:4px 0}</style></head><body>${reportHtml(data)}</body></html>`);
    win.document.close();
    win.print();
    return;
  }

  const filename = `trimetrix-yanitlari-${data.participant.adSoyad.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9çğıöşü]+/gi,'-') || 'katilimci'}.pdf`;
  const content = [
    { text: 'Tutum Atölyesi | TriMetrix Anket Yanıtları', style: 'title' },
    { text: 'Beyaz yakalı profesyoneller için tutum dönüştüren değerlendirme', style: 'subtitle', margin: [0, 0, 0, 18] },
    { text: 'Katılımcı Bilgileri', style: 'sectionTitle' },
    tableFromPairs([
      ['Ad Soyad', data.participant.adSoyad],
      ['E-posta', data.participant.eposta],
      ['Kurum', data.participant.kurum],
      ['Pozisyon', data.participant.pozisyon],
      ['Tarih', data.participant.tarih]
    ]),
    { text: 'Değer Profili / Hartman Value Profile', style: 'sectionTitle', margin: [0, 18, 0, 8] },
    ...rankPdfBlocks(data.valueProfile),
    { text: 'Motivasyonlar', style: 'sectionTitle', margin: [0, 18, 0, 8] },
    ...rankPdfBlocks(data.motivators),
    { text: 'Davranış / DISC', style: 'sectionTitle', margin: [0, 18, 0, 8] },
    ...data.disc.map(row => ({
      margin: [0, 0, 0, 6],
      columns: [
        { text: `Grup ${row.group}`, width: 54, bold: true },
        { text: `En çok: ${row.most}`, width: '*' },
        { text: `En az: ${row.least}`, width: '*' }
      ]
    }))
  ];

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [36, 48, 36, 42],
    info: { title: 'TriMetrix Anket Yanıtları', author: 'Tutum Atölyesi' },
    footer: (currentPage, pageCount) => ({
      columns: [
        { text: 'Tutum Atölyesi', color: '#0f5f67', bold: true },
        { text: `${currentPage}/${pageCount}`, alignment: 'right', color: '#687383' }
      ],
      margin: [36, 0, 36, 0], fontSize: 8
    }),
    content,
    styles: {
      title: { fontSize: 20, bold: true, color: '#0f5f67', margin: [0, 0, 0, 4] },
      subtitle: { fontSize: 10, color: '#687383' },
      sectionTitle: { fontSize: 14, bold: true, color: '#103d53', margin: [0, 4, 0, 8] },
      blockTitle: { fontSize: 11, bold: true, color: '#132133', margin: [0, 8, 0, 5] },
      small: { fontSize: 9, color: '#132133' }
    },
    defaultStyle: { font: 'Roboto', fontSize: 9, color: '#132133' }
  };

  pdfMake.createPdf(docDefinition).download(filename);
}

function tableFromPairs(rows){
  return {
    table: {
      widths: [90, '*'],
      body: rows.map(([label, value]) => [
        { text: label, bold: true, fillColor: '#f7f3ed' },
        { text: value || '-', fillColor: '#fffdfa' }
      ])
    },
    layout: {
      hLineColor: () => '#e7ded2',
      vLineColor: () => '#e7ded2',
      paddingLeft: () => 8,
      paddingRight: () => 8,
      paddingTop: () => 6,
      paddingBottom: () => 6
    }
  };
}

function rankPdfBlocks(blocks){
  const out = [];
  blocks.forEach(block => {
    out.push({ text: block.title, style: 'blockTitle' });
    out.push({
      ol: block.items.map(item => ({ text: item, margin: [0, 0, 0, 2] })),
      margin: [10, 0, 0, 6]
    });
  });
  return out;
}

function reportHtml(data){
  const renderRank = (blocks) => blocks.map(block => `<h3>${block.title}</h3><ol>${block.items.map(i => `<li>${i}</li>`).join('')}</ol>`).join('');
  return `<h1>Tutum Atölyesi | TriMetrix Anket Yanıtları</h1>
    <h2>Katılımcı Bilgileri</h2><p><strong>Ad Soyad:</strong> ${data.participant.adSoyad}<br><strong>E-posta:</strong> ${data.participant.eposta}<br><strong>Kurum:</strong> ${data.participant.kurum}<br><strong>Pozisyon:</strong> ${data.participant.pozisyon}<br><strong>Tarih:</strong> ${data.participant.tarih}</p>
    <h2>Değer Profili</h2>${renderRank(data.valueProfile)}
    <h2>Motivasyonlar</h2>${renderRank(data.motivators)}
    <h2>Davranış / DISC</h2>${data.disc.map(row => `<p><strong>Grup ${row.group}</strong> — En çok: ${row.most} | En az: ${row.least}</p>`).join('')}`;
}

function init(){
  renderRankings();
  renderDisc();
  document.querySelectorAll('#surveyForm input').forEach(input => input.addEventListener('input', updateCompletion));
  document.getElementById('surveyForm').addEventListener('submit', e => { e.preventDefault(); generatePdf(); });
  updateCompletion();
}

document.addEventListener('DOMContentLoaded', init);
