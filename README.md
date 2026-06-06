# Tutum Atölyesi TriMetrix Anket Sitesi

Bu klasörde tek sayfalık, istemci tarafında çalışan TriMetrix anket sitesi yer alır.

## Dosyalar
- `index.html`: Ana sayfa
- `styles.css`: Tutum Atölyesi görünümüne uygun tasarım dosyası
- `app.js`: Sıralama, DISC validasyonu ve PDF oluşturma kodları

## Kullanım
1. `index.html` dosyasını tarayıcıda açın.
2. Katılımcı bilgilerini doldurun.
3. Değer Profili ve Motivasyon bölümlerinde kutuları sürükleyerek veya oklarla sıralayın; her sıralama kartında “sıralamamı tamamladım” onayını işaretleyin.
4. DISC bölümünde her grup için farklı olmak üzere bir “En çok” ve bir “En az” seçin.
5. Katılımcı bilgileri, tüm sıralama onayları ve tüm DISC seçimleri tamamlanınca “PDF Yanıtları Oluştur” butonu aktif olur.

PDF oluşturma için pdfmake CDN kullanılmıştır. İnternet yoksa sistem yazdırılabilir bir rapor penceresi açar.
