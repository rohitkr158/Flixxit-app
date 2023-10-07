import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Term(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <div>
        <button onClick={() => navigate(props.login ? "/" : "/")}>
          Back to Home
        </button>
      </div>
      <br />
      <div>
        <h1>Flixxit Terms of Use</h1>
        <br />
        <p>
          Flixxit provides a personalized subscription service that allows our
          members to access entertainment content (“Flixxit content”) over the
          Internet on certain Internet-connected TVs, computers and other
          devices ("Flixxit ready devices"). <br />
          <br />
          These Terms of Use govern your use of our service. As used in these
          Terms of Use, "Flixxit service", "our service" or "the service" means
          the personalized service provided by Flixxit for discovering and
          accessing Flixxit content, including all features and functionalities,
          recommendations and reviews, our websites, and user interfaces, as
          well as all content and software associated with our service.
          References to ‘you’ in these Terms of Use indicate the member who
          created the Flixxit account and whose payment method is charged.
        </p>
        <br />
        <ol>
          <li>
            Membership <br />
            <br />
            <ul>
              <li>
                Your Flixxit membership will continue until terminated. To use
                the Flixxit service you must have Internet access and a Flixxit
                ready device, and provide us with one or more Payment Methods.
                “Payment Method” means a current, valid, accepted method of
                payment, as may be updated from time to time, and which may
                include payment through your account with a third party. Unless
                you cancel your membership before your billing date, you
                authorize us to charge the membership fee for the next billing
                cycle to your Payment Method (see "Cancellation" below).
              </li>
              <br />
              <li>
                We may offer a number of membership plans, including memberships
                offered by third parties in conjunction with the provision of
                their own products and services. We are not responsible for the
                products and services provided by such third parties. Some
                membership plans may have differing conditions and limitations,
                which will be disclosed at your sign-up or in other
                communications made available to you. You can find specific
                details regarding your Flixxit membership by visiting the
                Flixxit.com website and clicking on the "Account" link available
                at the top of the pages under your profile name.
              </li>
            </ul>
          </li>
          <br />
          <li>Promotional Offers:</li>
          <p>
            We may from time to time offer special promotional offers, plans or
            memberships (“Offers”). Offer eligibility is determined by Flixxit
            at its sole discretion and we reserve the right to revoke an Offer
            and put your account on hold in the event that we determine you are
            not eligible. Members of households with an existing or recent
            Flixxit membership may not be eligible for certain introductory
            Offers. We may use information such as device ID, method of payment
            or an account email address used with an existing or recent Flixxit
            membership to determine Offer eligibility. The eligibility
            requirements and other limitations and conditions will be disclosed
            when you sign-up for the Offer or in other communications made
            available to you.
          </p>
          <br />
          <li>
            Billing and Cancellation
            <ul>
              <li>
                Billing Cycle. The membership fee for the Flixxit service and
                any other charges you may incur in connection with your use of
                the service, such as taxes and possible transaction fees, will
                be charged to your Payment Method on the specific payment date
                indicated on the "Account" page. The length of your billing
                cycle will depend on the type of subscription that you choose
                when you signed up for the service. In some cases your payment
                date may change, for example if your Payment Method has not
                successfully settled, when you change your subscription plan or
                if your paid membership began on a day not contained in a given
                month. Visit the Flixxit.com website and click on the "Billing
                details" link on the "Account" page to see your next payment
                date. We may authorize your Payment Method in anticipation of
                membership or service-related charges through various methods,
                including authorizing it for up to approximately one month of
                service as soon as you register. If you signed up for Flixxit
                using your account with a third party as a Payment Method, you
                can find the billing information about your Flixxit membership
                by visiting your account with the applicable third party.
              </li>
              <br />
              <li>
                Payment Methods. To use the Flixxit service you must provide one
                or more Payment Methods. You authorize us to charge any Payment
                Method associated to your account in case your primary Payment
                Method is declined or no longer available to us for payment of
                your subscription fee. You remain responsible for any
                uncollected amounts. If a payment is not successfully settled,
                due to expiration, insufficient funds, or otherwise, and you do
                not cancel your account, we may suspend your access to the
                service until we have successfully charged a valid Payment
                Method. For some Payment Methods, the issuer may charge you
                certain fees, such as foreign transaction fees or other fees
                relating to the processing of your Payment Method. Local tax
                charges may vary depending on the Payment Method used. Check
                with your Payment Method service provider for details.
              </li>
              <br />
              <li>
                Updating your Payment Methods. You can update your Payment
                Methods by going to the "Account" page. We may also update your
                Payment Methods using information provided by the payment
                service providers. Following any update, you authorize us to
                continue to charge the applicable Payment Method(s).
              </li>
              <br />
              <li>
                Cancellation. You can cancel your Flixxit membership at any
                time, and you will continue to have access to the Flixxit
                service through the end of your billing period. To the extent
                permitted by the applicable law, payments are non-refundable and
                we do not provide refunds or credits for any partial membership
                periods or unused Flixxit content. To cancel, go to the
                "Account" page and follow the instructions for cancellation. If
                you cancel your membership, your account will automatically
                close at the end of your current billing period. To see when
                your account will close, click "Billing details" on the
                "Account" page. If you signed up for Flixxit using your account
                with a third party as a Payment Method and wish to cancel your
                Flixxit membership, you may need to do so through such third
                party, for example by visiting your account with the applicable
                third party and turning off auto-renew, or unsubscribing from
                the Flixxit service through that third party.
              </li>
              <br />
              <li>
                Changes to the Price and Subscription Plans. We may change our
                subscription plans and the price of our service from time to
                time; however, any price changes or changes to your subscription
                plans will apply no earlier than 30 days following notice to
                you.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <br />
      <br />
    </Container>
  );
}

const Container = styled.div`
  button {
    /* padding-left: 3rem; */
    background-color: red;
    color: white;
  }
  h1 {
    color: red;
    padding-left: 3rem;
  }
  p {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  ol {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  li {
    padding-left: 3rem;
    padding-right: 3rem;
    color: #64ccc5;
  }
`;
