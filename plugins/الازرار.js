let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> ⧉┆مرحبا ياعزيزي 😍 ⤌⤈\n> ↝👋🏻↜\n> ⧉┆انا بوت واتساب'
 },
 body: {
 text: '> ♩☜ اعمل في الخاص وجروبات\n> ♩☜ وظيفتي حماية جروبك\n> ♩☜اوامر كلمه .الاوامر لمعرفه\> n♩☜ اوامر البوت وطريقه الاستخدام\n> ♩☜ مميزات البوت كثيره جدا\n> ♩☜ ويعمل بجودة فائقه وعاليه\n> 𓍹————————————𓍻\n> ↜★ اوامر سورس عفرتو و بلاك بوت ★↝\n> 𓍹————————————𓍻'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '❰ اختار من القائمه📄 ❱',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: 'بوت بلاك & عفروتو',
  rows: [
  {
  header: 'يعطيك اوامر سانجي',
  title: 'الاعضاء',
  description: '',
  id: '.منشن'
  },
  {
  header: 'يعطيك اوامر الجروبات',
  title: 'الجروبات',
  description: '',
  id: '.2م'
  },
  {
   header: 'يعطيك اوامر التسليه',
  title: 'التسليه',
  description: '',
  id: '.م7'
  },
   {
    header: 'يعطيك اوامر البنك',
  title: 'البنك',
  description: '',
  id: '.م8'
  },
   {
    header: 'يعطيك اوامر القرآن',
  title: 'القرآن',
  description: '',
  id: '.م9'
  },
   {
    header: 'يعطيك كل الاوامر',
  title: 'جميع الاوامر',
  description: '',
  id: '.10م'
  },
   {
   header: 'يعطيك اوامر المالك',
  title: 'المالك',
  description: '',
  id: '.م2'
  },
  {
    header: 'يعطيك اوامر البحث و التنزيل',
  title: 'البحث و التنزيل',
  description: '',
  id: '.م4'
  },
  {
  header: 'يعطيك اوامر التحويل',
  title: 'التحويل',
  description: '',
  id: '.م5'
  },
  {
  header: 'يعطيك اوامر الملصقات',
  title: 'الملصقات',
  description: '',
  id: '.م6'
   },
   {
   nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '❰اختار من القائمه ²❱',
  sections: [
  {
  title: 'اوامر جروب',
  highlight_label: 'بوت استا',
  rows: [
  {
  header: 'يمشنك علي أعضاء الجروب حوله',
  title: 'يلا منشن',
  description: '',
  id: '.منشن'
  },
  {
  header: 'يعطيك اوامر الجروبات',
  title: 'الجروبات',
  description: '',
  id: '.2م'
  },
  {
   header: 'يعطيك اوامر التسليه',
  title: 'التسليه',
  description: '',
  id: '.م7'
  },
   {
    header: 'يعطيك اوامر البنك',
  title: 'البنك',
  description: '',
  id: '.م8'
  },
   {
    header: 'يعطيك اوامر القرآن',
  title: 'القرآن',
  description: '',
  id: '.م9'
  },
   {
    header: 'يعطيك كل الاوامر',
  title: 'جميع الاوامر',
  description: '',
  id: '.10م'
  },
   {
   header: 'يعطيك اوامر المالك',
  title: 'علم',
  description: '',
  id: '.م2'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }
  ]
  }
  }
  }
  }
  }, {})

  }

  handler.help = ['info']
  handler.tags = ['main']
  handler.command = ['القائمه']

  export default handler
