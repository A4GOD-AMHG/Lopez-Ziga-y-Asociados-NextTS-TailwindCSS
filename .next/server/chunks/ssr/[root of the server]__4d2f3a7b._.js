module.exports = {

"[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase-admin/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase-admin/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/firebase_admin.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "adminDb": (()=>adminDb)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const firebaseAdminConfig = {
    credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["cert"])({
        projectId: ("TURBOPACK compile-time value", "lopezziga-1234"),
        privateKey: ("TURBOPACK compile-time value", "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC1JFouhzJE0zD6\n+Vpf7lI3Si2Sv6vYcaXkHDYMAPdZ56HBLjxBdLZ/EH2D3Ydt/TB0CIrbcveF1W9X\nkLPG2Y/U3IsGylHvJ7/iU9IaDTJTPP7nW3nCCq2iBpMuJ4NVuPtTU0imU6I9/YnD\na4JomveaV1LpyyxuHOrBP72yEqNCSiaO8lfAvY7WCINe7GnS3YT8AeqPyh6HfUn9\nmgDYcui1KyguXuS4tkbVMEqbg4vMs4wj/JcWwuz/egh+/VmrFUdUpukCDAka66lo\nqaTSctEreQeEHWL2R4nJDPBXeC0IctMUROUqRRL6wA8+Ij/5qIGZGqSpxgxzjHti\nK5AeZ693AgMBAAECggEABkDjhiCvuRWLZtat6orpNrRuX1cToSzHO9lHemGcKHPp\nLyif9uiHFlrk4mUG9GKdxhu3Y30UE4A7UEwUEMTZBNG6UPkyG+4E31Tid3jGKH5+\nFFGhofPJa8MLWLgPfimdL5K7+tX/T2GN3Hu9LExRSPhDygN0HLcN2a8QJvIixbqH\nt5voI4y5fycii27SIRNh55oGeW/CqXNcqJpKfjh0ukhp4Fp0HM7AvOuIFmwQovm6\nTOal5QTRMEOjlcxBVGt6YIErTnEJNQ7IhY/mL1srNVqDCw479EUdcBqf0sHK9rnN\nFEpJrsxX9KYTFIZTaLfiSUpf4b/elZ0WD/YxBEFiCQKBgQDi/825GN+m8aXE4O2C\nLHV0ETimi6l9tJjNVyuE+ssfIZoFnmmiZl5ejze6uk6R3sHhUW2fDqaoqdPfl69j\nKgSOClcIn4kdtLVLKDYiloQEnRpMWsRZjQ0ao/wA7pzwH0fbqsSE103HggBgDME+\nyqjCu3OE8++dEadDK5OxXkJ1jwKBgQDMSMAPBI0rLFVtPk7WdosICWalyATISfq1\nV4QHJrLwPxXIzgojknUmtkwtq+V7ew5uucjeKIDyPFK6tBDnjHVkmZ/WeMNXVT22\nwH0KuD5kZljNbW6lq2mmgav1MZHkbRHekMd+Wv8hRJVlsPcawBRlD+3vjSHPrJxx\n23q8leVDmQKBgDaBJWxkRI9ZRmxXda/j7O/JksiqkC/WxTnIzHJJpav77Xeb6dFM\nsywRR1hWk7cCvZrUanXelrW40V7GlR5CYIWahftUEyBG26EILrdvXJOfBUmAIdU+\nwP68kS3IHXaqjB56imU7LTnSRTTK2zuwfYUEbWBnEgmsy3SdagEUmPCRAoGAKOYz\n1Y3iuY8Rt2JvJE7tfPls3KoUEwmEsUPJQilEUAdBVEe0DfUnkU2UKNyugC9d71sw\n1RGk51qecZTVgZZEdpSvRKA+88A0L9+P6VKD41P+WXqcWXzdFSIHDHsVK3eOyVGR\nL0IGrGFvy8FHZ8qnCqjKyVgnOc3kMINxqkoUcZkCgYBvshSJjdHFtiCL+mhJJ8Gq\nPgnU94Bkwt/lKqOGxr6hG7JTc+MzTkW+dMF4mk1wz7D+CjsItKh+Sx9cflL3EP2R\nOU6abqv5UfWwg9gHhNFbVOtUs3YuQUVB4O5ivwvWIKuAK1W8Orv43gGZCMLsO0m6\nyuGQ5IYoVwHln/n3vz0OFQ==\n-----END PRIVATE KEY-----\n")?.replace(/\\n/g, '\n'),
        clientEmail: ("TURBOPACK compile-time value", "firebase-adminsdk-fbsvc@lopezziga-1234.iam.gserviceaccount.com")
    })
};
const adminDb = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])(firebaseAdminConfig) : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])()[0]);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ {"002529b4284b7f0878352f81b7d598e87290cea892":"logout","4062b95f99b8d30f4951b3652b8f7383e574a7610d":"addToNewsletter","406ffd5c0146f33e741c8e7fed98481475ffa418c0":"createConsultation","6091e7798d3426cb2ebe46cd064d2b50f6fab85203":"handleAdminLogin","70d2b88b1dce8a30323aefa952a0b54fb9c18f7ca3":"updateConsultationStatus"} */ __turbopack_context__.s({
    "addToNewsletter": (()=>addToNewsletter),
    "createConsultation": (()=>createConsultation),
    "handleAdminLogin": (()=>handleAdminLogin),
    "logout": (()=>logout),
    "updateConsultationStatus": (()=>updateConsultationStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase_admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase_admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase_admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase_admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ addToNewsletter(email) {
    try {
        await resend.contacts.create({
            email,
            audienceId: process.env.RESEND_AUDIENCE_ID,
            unsubscribed: false
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error adding to newsletter:', error);
        return {
            success: false
        };
    }
}
async function sendStatusEmail(email, status, date) {
    try {
        await resend.emails.send({
            from: 'consultas@tudominio.com',
            to: email,
            subject: `Estado de tu consulta: ${status === 'approved' ? 'Aprobada' : 'Rechazada'}`,
            html: `<p>Tu consulta ha sido <strong>${status === 'approved' ? 'aprobada' : 'rechazada'}</strong>${date ? ` para el ${new Date(date).toLocaleDateString()}` : ''}.</p>`
        });
    } catch (error) {
        console.error('Error enviando email:', error);
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateConsultationStatus(id, status, date) {
    try {
        const docRef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase_admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection('consultations').doc(id);
        await docRef.update({
            status,
            ...date && {
                appointmentDate: date
            }
        });
        const doc = await docRef.get();
        const email = doc.data()?.email;
        if (email) {
            await sendStatusEmail(email, status, date);
        }
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: 'Error actualizando estado'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logout() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete('admin-authenticated');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createConsultation(formData) {
    const appointmentDate = formData.get('appointmentDate');
    try {
        const consultationData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            appointmentDate: new Date(appointmentDate).toISOString(),
            description: formData.get('description') || '',
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase_admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection('consultations').add(consultationData);
        await resend.emails.send({
            from: `Consultas <${process.env.RESEND_EMAIL}>`,
            to: consultationData.email,
            subject: 'Consulta recibida',
            html: `<p>Hemos recibido tu consulta para el ${new Date(appointmentDate).toLocaleDateString()}. Te contactaremos pronto.</p>`
        });
        return {
            success: true,
            id: docRef.id
        };
    } catch (error) {
        return {
            success: false,
            error: 'Error al crear consulta'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ handleAdminLogin(prevState, formData) {
    try {
        const password = formData.get('password')?.toString();
        if (!password) {
            return {
                error: 'Contraseña requerida'
            };
        }
        if (password !== process.env.ADMIN_PASSWORD) {
            return {
                error: 'Contraseña incorrecta'
            };
        }
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set('admin-authenticated', 'true', {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/admin'
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin');
    } catch (error) {
        if (error instanceof Error && error.message.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        return {
            error: 'Error del servidor'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addToNewsletter,
    updateConsultationStatus,
    logout,
    createConsultation,
    handleAdminLogin
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToNewsletter, "4062b95f99b8d30f4951b3652b8f7383e574a7610d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateConsultationStatus, "70d2b88b1dce8a30323aefa952a0b54fb9c18f7ca3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "002529b4284b7f0878352f81b7d598e87290cea892", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createConsultation, "406ffd5c0146f33e741c8e7fed98481475ffa418c0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleAdminLogin, "6091e7798d3426cb2ebe46cd064d2b50f6fab85203", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(auth)/admin/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>AdminLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
async function AdminLayout({ children }) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    if (!cookieStore.get('admin-authenticated')?.value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin/login');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.576-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.424 0 2.774-.302 4-.838v-2.162z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/admin/layout.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/admin/layout.tsx",
                            lineNumber: 17,
                            columnNumber: 17
                        }, this),
                        "Cerrar Sesión"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/admin/layout.tsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/admin/layout.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__4d2f3a7b._.js.map