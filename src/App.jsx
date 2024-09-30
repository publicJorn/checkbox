import './App.css';

function CheckBox({ id, label, name, value, defaultChecked = false }) {
  return (
    <div className="check-field">
      <input type="checkbox" id={id} name={name} value={value} defaultChecked={defaultChecked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function App() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <CheckBox
        label="Default checked"
        name="myCheckbox"
        id="myCheckbox"
        value="bla"
        defaultChecked
      />
      <CheckBox label="Not default checked" name="myCheckbox2" id="myCheckbox2" value="yada" />
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" /> Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" /> Option 3
        </label>
      </p>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default App;
