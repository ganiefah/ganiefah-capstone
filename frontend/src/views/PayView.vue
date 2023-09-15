<template>
    <div>
        <div class="container d-flex justify-content-center checkout">
        <div class="col-md-7 col-lg-8">
          <h2 class="mb-3 color">Billing address</h2>
          <form @submit.prevent ="submitCheckout()" >
            <div class="row g-3">
              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="12345 Main St"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-12">
                <label for="address2" class="form-label"
                  >Address 2 <span>(Optional)</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>South Africa</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">Province</label>
                <select class="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>KwaZulu-Natal</option>
                  <option>Limpopo</option>
                  <option>Eastern Cape</option>
                  <option>Western Cape</option>
                  <option>North West</option>
                  <option>Northern Cape</option>
                  <option>Mpumalanga</option>
                  <option>Gauteng</option>
                  <option>Free State</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div class="col-md-3">
                <label for="postalCode" class="form-label">Postal Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="postalCode"
                  placeholder=""
                  required
                  minlength="4"
                  maxlength="4"
                />
                <div class="invalid-feedback">Postal Code is Required</div>
              </div>
            </div>

            <hr class="my-4 white" />

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="same-address"
              />
              <label class="form-check-label" for="same-address"
                >Shipping address is the same as my billing address</label
              >
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" />
              <label class="form-check-label" for="save-info"
                >Save this information for next time</label
              >
            </div>

            <hr class="my-4 white" />

            <h2 class="mb-3 color">Payment</h2>

            <div class="my-3">
              <div class="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  checked
                  required
                />
                <label class="form-check-label" for="credit">Credit card</label>
              </div>
              <div class="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="debit">Debit card</label>
              </div>
              <div class="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>

            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">Name on card</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small class="white">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>

              <div class="col-md-6">
                <label for="cc-number" class="form-label"
                  >Credit card number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder="xxxx-xxxx-xxxx"
                  required
                  minlength="12"
                  maxlength="12"
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div class="col-md-6">
                <label for="cc-expiration" class="form-label">Expiration</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder="12/08"
                  required
                  minlength="5"
                  maxlength="5"
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>

              <div class="col-md-6">
                <label for="cc-cvv" class="form-label">CVV</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder="786"
                  required
                  minlength="3"
                  maxlength="3"
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr class="my-4 white" />

            <button class="btn" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      methods: {
            submitCheckout() {
                this.$store.dispatch("submitCheckout");
            }
        }        
    }
</script>

<style scoped>
.cart  {
  min-height: 60vh;
}

th {
text-align: center;
}

td {
height: 150px;
}


</style>