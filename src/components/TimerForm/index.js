import styles from "./TimerForm.module.css";

const TimerForm = ({ setTimers }) =>{
    const handleFormSubmit = (event) =>{
        event.preventDefault();
      
            const form = event.target;

            const newTimer = Object.fromEntries(new FormData(form))
            
            if (newTimer.duration && newTimer.name !== null)
            {
                newTimer.id = Date.now();

                newTimer.duration = parseInt(newTimer.duration);



                setTimers((timers) => [...timers, newTimer]);
            }; 
        form.reset();
    };

    return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
        <input 
            type="text" 
            className={styles.input}
            name="name" 
            placeholder= "Nome" 
        />
        <input 
            type="number" 
            className={styles.input}
            name="duration" 
            placeholder= "Duração(segundos)" 
            min="1"
        />
            
        <input
            type="submit"
            className={styles.submitButton}
            value="+"
        />
    </form>
    );
};

export default TimerForm;