import { type NextRequest } from 'next/server'
const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate({ key: process.env.GOOGLE_TRANSLATE_API_KEY });
export async function POST(req: NextRequest) {
    const { text, target } = await req.json()
    // "text" can be a string or an array of strings for translating multiple texts.
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation: any, i: any) => {
        console.log(`${text} => (${target}) ${translation}`);
    });
    return Response.json(translations)
}

//https://cloud.google.com/nodejs/docs/reference/translate/latest/translate/v2.translate
// <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
// <script>
//     Weglot.initialize({
//         api_key: 'wg_2e36ee5568854ba6ed2b64d472fc3a358'
//     });
// </script>
// <!--           ConveyThis Script Start         -->
// <script src="//cdn.conveythis.com/javascript/conveythis.js?api_key=pub_18d69d4f5249e7c5c3d6747ce7455c55"></script>
// <!--           ConveyThis Script End         -->
