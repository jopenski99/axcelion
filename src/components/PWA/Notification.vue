<template>
    <q-card class="q-pa-md full-width">
        <q-card-actions align="right">
            <q-btn color="primary" label="Request Permission" @click="requestPermission" />
            <q-btn color="primary" label="Show Notification" @click="showNotification" />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    methods: {
        requestPermission() {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                } else {
                    console.log('Notification permission denied.');
                }
            });
        },
        showNotification() {
            const options = {
                body: 'This is a sample notification',
                icon: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                }
            };
            const n = new Notification('Hello world!', options);
            n.onshow = () => console.log('Notification shown');
            n.onclose = () => console.log('Notification closed');
            n.onclick = () => console.log('Notification clicked');
            n.onerror = () => console.log('Notification error');
            n.onclose = () => console.log('Notification closed');
        }
    }
}
</script>
