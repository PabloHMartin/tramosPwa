import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

// LUNES
export const lFromP3ToP3at0h = functions.pubsub
            .schedule('0 0 * * 1').onRun(
              context => {
                db.collection('tramos').doc('p3').update({
                  inhabil : false,
                  inicio: '00:00 pm',
                  fin: '08:00 am'
                });
            });


// UNIFICADOS
export const fromP3ToP3at0h = functions.pubsub
            .schedule('0 0 * * 2-5').onRun(
              context => {
                db.collection('tramos').doc('p2').update({
                  activo : false,
                });
                db.collection('tramos').doc('p3').update({
                   activo : true,
                  inicio: '00:00 pm',
                  fin: '08:00 am'
                });
            });

export const fromP3ToP2at8h = functions.pubsub
            .schedule('0 8 * * 1-5').onRun(
              context => {
                db.collection('tramos').doc('p3').update({
                  activo : false,
                });
                db.collection('tramos').doc('p2').update({
                  activo : true,
                  inicio: '08:00 am',
                  fin: '10:00 am'
                });
            });

export const fromP2ToP1at10h = functions.pubsub
            .schedule('0 10 * * 1-5').onRun(
              context => {
                db.collection('tramos').doc('p2').update({
                  activo : false
                });
                db.collection('tramos').doc('p1').update({
                  activo : true,
                  inicio: '10:00 am',
                  fin: '14:00 pm'
                });
            });

export const fromP1ToP2at14h = functions.pubsub
            .schedule('0 14 * * 1-5').onRun(
              context => {
                db.collection('tramos').doc('p1').update({
                  activo : false
                });
                db.collection('tramos').doc('p2').update({
                  activo : true,
                  inicio: '14:00 pm',
                  fin: '18:00 pm'
                });
            });

export const fromP2ToP1at18h = functions.pubsub
            .schedule('0 18 * * 1-5').onRun(
              context => {
                db.collection('tramos').doc('p2').update({
                  activo : false
                });
                db.collection('tramos').doc('p1').update({
                  activo : true,
                  inicio: '18:00 pm',
                  fin: '22:00 pm'
                });
            });

export const fromP1ToP2at22h = functions.pubsub
            .schedule('0 22 * * 1-5').onRun(
              context => {
                db.collection('tramos').doc('p1').update({
                  activo : false
                });
                db.collection('tramos').doc('p2').update({
                  activo : true,
                  inicio: '22:00 pm',
                  fin: '00:00 pm'
                });
            });

// FINDE
export const fFromP2ToP3at0h = functions.pubsub
            .schedule('0 0 * * 6').onRun(
              context => {
                db.collection('tramos').doc('p2').update({
                  activo : false
                });
                db.collection('tramos').doc('p3').update({
                  inhabil : true,
                });
            });
