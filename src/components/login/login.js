import React, {useState} from 'react';

function Login() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleChanges = (e) => {
    if (e.target.name === 'password') {
      if (e.target.value === '123456') {
        localStorage.setItem('password', e.target.value);
        setPassword(e.target.value);
      }
    } else if (e.target.name === 'email') {
      if (e.target.value === 'gaza@gmail.com')
        localStorage.setItem('email', e.target.value);
      setEmail(e.target.value);
    }
  };
  const submit = () => {
    console.log(localStorage.password);
    console.log(localStorage.email);
    if (
      localStorage.password === '123456' &&
      localStorage.email === 'gaza@gmail.com'
    ) {
      console.log(localStorage.password);
      console.log(localStorage.email);
      window.location.href = '/';
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div className="form-outline mb-4">
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                name="email"
                value={email}
                onChange={handleChanges}
              />
              <label className="form-label" for="email">
                Email address(gaza@gmail.com)
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg"
                value={password}
                onChange={handleChanges}
              />
              <label className="form-label" for="password">
                Password(123456)
              </label>
            </div>

            <button
              type="submit"
              onClick={submit}
              name="submit"
              className="btn btn-primary btn-lg btn-block"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
