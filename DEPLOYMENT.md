# نشر الموقع على GitHub Pages

## الخطوات المطلوبة:

### 1. تفعيل GitHub Pages:
1. اذهب إلى مستودع GitHub: https://github.com/Zllawi/personal-portfolio
2. انقر على "Settings" في الأعلى
3. انتقل إلى "Pages" في القائمة الجانبية
4. في قسم "Source"، اختر "GitHub Actions"
5. احفظ الإعدادات

### 2. النشر التلقائي:
- الموقع سيتم نشره تلقائياً عند كل push إلى branch main
- يمكنك متابعة حالة النشر في تبويب "Actions" في GitHub

### 3. رابط الموقع:
بعد النشر، سيكون الموقع متاحاً على:
**https://zllawi.github.io/personal-portfolio**

### 4. تشغيل الموقع محلياً:
```bash
# تثبيت المتطلبات
npm install

# تشغيل الموقع في وضع التطوير
npm start

# بناء الموقع للإنتاج
npm run build
```

### 5. تحديث المحتوى:
لتحديث المحتوى الشخصي، قم بتعديل الملفات التالية:

- `src/components/Hero.js` - الاسم والعنوان
- `src/components/About.js` - معلومات عنك والإحصائيات
- `src/components/Skills.js` - مهاراتك ومستوى الإتقان
- `src/components/Projects.js` - مشاريعك
- `src/components/Contact.js` - معلومات التواصل
- `src/components/Footer.js` - معلومات التذييل

### 6. تخصيص التصميم:
- الألوان والخطوط في `src/styles.css`
- يمكنك تغيير الألوان الأساسية بالبحث عن `#4f46e5` و `#7c3aed`

### 7. إضافة مشاريع جديدة:
في ملف `src/components/Projects.js`، أضف مشروع جديد إلى مصفوفة `projects`:

```javascript
{
  id: 5,
  title: 'اسم المشروع',
  category: 'web', // أو 'app'
  description: 'وصف المشروع',
  technologies: ['React', 'Node.js', 'MongoDB'],
  image: 'رابط الصورة'
}
```

### 8. نصائح مهمة:
- تأكد من تحديث معلوماتك الشخصية في جميع الملفات
- استخدم صور عالية الجودة لمشاريعك
- اختبر الموقع على أجهزة مختلفة للتأكد من التجاوب
- حدث المحتوى بانتظام لإظهار مشاريعك الجديدة

### 9. استكشاف الأخطاء:
إذا لم يعمل النشر:
1. تحقق من تبويب "Actions" في GitHub للأخطاء
2. تأكد من أن GitHub Pages مفعل
3. تأكد من أن branch main هو الافتراضي

### 10. تحسين الأداء:
- ضغط الصور قبل استخدامها
- استخدام تنسيقات حديثة مثل WebP للصور
- تقليل حجم ملفات CSS و JavaScript