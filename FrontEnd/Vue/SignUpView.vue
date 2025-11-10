<template>
  <main class="shell">
    <div class="blob blob-a" aria-hidden="true"></div>
    <div class="blob blob-b" aria-hidden="true"></div>

    <section class="card" role="region" aria-labelledby="signup-title">
      <header class="brand">
        <svg class="logo" viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="var(--brand-1)"/>
              <stop offset="1" stop-color="var(--brand-2)"/>
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#g2)"/>
          <path d="M20 40l8-12 6 8 10-16" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>
          <h1 id="signup-title" class="title">Crea tu cuenta</h1>
          <p class="subtitle">Únete y encuentra empleos por tus habilidades</p>
        </div>
      </header>

      <form class="form" @submit.prevent="onSubmit" novalidate aria-describedby="form-hint">
        <p id="form-hint" class="muted">Completa tus datos para comenzar.</p>

        <div class="field" :class="{ invalid: firstError }">
          <label for="firstname">Nombre</label>
          <input id="firstname" v-model="firstname" type="text" autocomplete="given-name"
                 placeholder="Julio" required />
          <small class="msg">{{ firstError }}</small>
        </div>

        <div class="field" :class="{ invalid: lastError }">
          <label for="lastname">Apellidos</label>
          <input id="lastname" v-model="lastname" type="text" autocomplete="family-name"
                 placeholder="Quirós Matarrita" required />
          <small class="msg">{{ lastError }}</small>
        </div>

        <div class="field" :class="{ invalid: emailError }">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" inputmode="email" autocomplete="email"
                 placeholder="you@example.com" required />
          <small class="msg">{{ emailError }}</small>
        </div>

        <div class="field" :class="{ invalid: roleError }">
          <label for="role">Rol</label>
          <select id="role" v-model="role" required>
            <option value="">Selecciona tu rol</option>
            <option value="candidate">Candidato</option>
            <option value="employer">Empleador</option>
          </select>
          <small class="msg">{{ roleError }}</small>
        </div>

        <div class="field">
          <label for="location">Ubicación (Ciudad / País)</label>
          <input id="location" v-model="location" type="text" autocomplete="address-level2"
                 placeholder="San José, Costa Rica" />
          <small class="msg"></small>
        </div>

        <div class="field">
          <label for="workmode">Modalidad preferida</label>
          <select id="workmode" v-model="workmode">
            <option value="">Selecciona una opción</option>
            <option value="remote">Remoto</option>
            <option value="hybrid">Híbrido</option>
            <option value="onsite">Presencial</option>
          </select>
          <small class="msg"></small>
        </div>

        <div class="field" :class="{ invalid: pwdError }">
          <label for="password">Contraseña</label>
          <div class="password-wrap">
            <input
              id="password"
              :type="showPwd ? 'text' : 'password'"
              v-model="password"
              autocomplete="new-password"
              placeholder="••••••••"
              minlength="8"
              required
            />
            <button type="button" class="peek" :aria-label="showPwd ? 'Ocultar' : 'Mostrar'"
                    :title="showPwd ? 'Ocultar' : 'Mostrar'" @click="showPwd = !showPwd">
              <svg viewBox="0 0 24 24" class="icon"><path d="M12 5c5 0 9 5 9 7s-4 7-9 7-9-5-9-7 4-7 9-7Zm0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
            </button>
          </div>
          <div class="strength" aria-hidden="true">
            <span class="bar" :class="{ on: score >= 1 }"></span>
            <span class="bar" :class="{ on: score >= 2 }"></span>
            <span class="bar" :class="{ on: score >= 3 }"></span>
            <span class="bar" :class="{ on: score >= 4 }"></span>
          </div>
          <small class="muted">Mínimo 8 caracteres, mezcla mayúsculas, números y símbolos.</small>
          <small class="msg">{{ pwdError }}</small>
        </div>

        <div class="field" :class="{ invalid: confirmError }">
          <label for="confirm">Confirmar contraseña</label>
          <div class="password-wrap">
            <input
              id="confirm"
              :type="showConfirm ? 'text' : 'password'"
              v-model="confirm"
              autocomplete="new-password"
              placeholder="••••••••"
              minlength="8"
              required
            />
            <button type="button" class="peek" :aria-label="showConfirm ? 'Ocultar' : 'Mostrar'"
                    :title="showConfirm ? 'Ocultar' : 'Mostrar'" @click="showConfirm = !showConfirm">
              <svg viewBox="0 0 24 24" class="icon"><path d="M12 5c5 0 9 5 9 7s-4 7-9 7-9-5-9-7 4-7 9-7Zm0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
            </button>
          </div>
          <small class="msg">{{ confirmError }}</small>
        </div>

        <div class="extras">
          <label class="check">
            <input type="checkbox" v-model="terms" required />
            <span>Acepto los <a class="link" href="#" target="_blank" rel="noopener">Términos y Condiciones</a></span>
          </label>
          <span class="muted">¿Ya tienes cuenta? <router-link class="link" :to="{ name: 'signin' }">Inicia sesión</router-link></span>
        </div>

        <button class="cta" type="submit" :disabled="submitting">
          {{ submitting ? 'Creando…' : 'Crear cuenta' }}
        </button>

        <div class="or"><span>o</span></div>

        <div class="providers">
          <button class="btn provider btn--google" type="button" @click="oauth('google')">
            <svg class="provider-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.6 12.23c0-.8-.07-1.39-.22-2h-9.18v3.64h5.43c-.11.9-.72 2.26-2.06 3.18l-.02.14 2.99 2.32.21.02c1.93-1.78 3.05-4.4 3.05-7.3z" fill="#4285F4"/>
              <path d="M12.2 22c2.75 0 5.06-.9 6.74-2.45l-3.21-2.49c-.86.6-2.02 1.02-3.53 1.02-2.7 0-4.99-1.82-5.81-4.28l-.12.01-3.14 2.43-.04.12C3.9 19.63 7.77 22 12.2 22z" fill="#34A853"/>
              <path d="M6.39 13.8c-.2-.6-.31-1.25-.31-1.9 0-.66.11-1.3.29-1.9l-.01-.13-3.18-2.47-.1.05C2.47 8.73 2.1 10.33 2.1 11.9c0 1.56.37 3.16.98 4.44l3.31-2.54z" fill="#FBBC05"/>
              <path d="M12.2 6.9c1.91 0 3.21.83 3.95 1.52l2.88-2.82C17.24 3.9 14.96 3 12.2 3 7.77 3 3.9 5.37 2.08 9.07l3.31 2.54c.82-2.46 3.11-4.7 6.81-4.7z" fill="#EA4335"/>
            </svg>
            Continuar con Google
          </button>

          <button class="btn provider btn--linkedin" type="button" @click="oauth('linkedin')">
            <svg class="provider-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#0A66C2" d="M20.45 20.45h-3.56v-5.59c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.69H9.31V9.5h3.41v1.49h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.21 2.34 4.21 5.38v5.9zM5.34 8.01a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9.5h3.56v10.95z"/>
            </svg>
            Continuar con LinkedIn
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';

const firstname = ref('');
const lastname  = ref('');
const email     = ref('');
const role      = ref('');
const location  = ref('');
const workmode  = ref('');
const password  = ref('');
const confirm   = ref('');
const terms     = ref(false);

const showPwd = ref(false);
const showConfirm = ref(false);
const submitting = ref(false);

const firstError = ref('');
const lastError  = ref('');
const emailError = ref('');
const roleError  = ref('');
const pwdError   = ref('');
const confirmError = ref('');

const score = ref(0);
watch(password, () => {
  let s = 0;
  if (password.value.length >= 8) s++;
  if (/[A-Z]/.test(password.value)) s++;
  if (/[0-9]/.test(password.value)) s++;
  if (/[^A-Za-z0-9]/.test(password.value)) s++;
  score.value = s;
});

function validate() {
  firstError.value = lastError.value = emailError.value = roleError.value = pwdError.value = confirmError.value = '';
  let ok = true;

  if (!firstname.value) { firstError.value = 'Campo requerido.'; ok = false; }
  if (!lastname.value)  { lastError.value  = 'Campo requerido.'; ok = false; }
  if (!email.value || !/.+@.+\..+/.test(email.value)) { emailError.value = 'Ingresa un email válido.'; ok = false; }
  if (!role.value) { roleError.value = 'Selecciona un rol.'; ok = false; }
  if (!password.value || password.value.length < 8) { pwdError.value = 'Mínimo 8 caracteres.'; ok = false; }
  if (password.value !== confirm.value) { confirmError.value = 'Las contraseñas no coinciden.'; ok = false; }
  if (!terms.value) { alert('Debes aceptar los Términos y Condiciones.'); ok = false; }

  return ok;
}

async function onSubmit() {
  if (!validate()) return;
  submitting.value = true;
  try {
    // TODO: reemplazar por tu endpoint real
    // const res = await fetch('/api/auth/register',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({...}) })
    alert(`Cuenta creada: ${firstname.value} ${lastname.value} (${role.value})`);
  } catch (e) {
    alert('Error al crear la cuenta');
  } finally {
    submitting.value = false;
  }
}

function oauth(provider) {
  // TODO: redirige al flujo OAuth real
  alert(`OAuth ${provider}`);
}
</script>
