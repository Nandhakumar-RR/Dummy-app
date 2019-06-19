import Route from '@ember/routing/route';


export default Route.extend({
    prefetch() {      
        return [
            'Highohan',
            'kanvik',
            'rtkihhu'
        ]
    }
});
