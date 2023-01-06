import { h } from "vue"; 






const wrapper = props => {
    return {
        ...props, 
        render(){
            let currentId = this.$props.currentId
            let comps =this.$slots.default().filter( el => el.type == comp)
            let currcomp = comps.filter( comp => comp.props.id == currentId)
            return h("div", { class : "test" }, currcomp);
        }, 
    }
}; 
const test = props => {
    return {
        ...props, 
        render(){
            return h("div", { class : "test" },   this.$props.id);
        }
    }
}; 
const toggler = props => ({
    ...props, 
    render(){
        let that = this;
        return h("button",{
            onClick(){
                console.log(that.$slots.default())
                that.$slots.default().push(h("h1", 'working'))
            }
        } ,this.$props.id)   
    },
    
})

export const compWrapper = wrapper({name : "compWrapper", props : { currentId : Number }}); 


export const comp = test({ name : "comp", props : {id : String}}); 

export const btn = toggler({name : "btn", props : {id : String}})
