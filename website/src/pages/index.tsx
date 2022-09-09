import React, {useEffect} from 'react';
import {HeadFC, Link} from 'gatsby';
import Layout from '../components/Layout';

import * as style from '../styles/index.module.css';

import {Fade, FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, wipeInY} from 'react-animated-components';
import useMediaQuery from '../hooks/useMediaQuery';

import Devices from '../assets/Devices.png';

const IndexPage = () => {
  const [canShowAnimations, setCanShowAnimations] = React.useState(false);

  const MQ_Full = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    setCanShowAnimations(true);
  }, []);

  const Gspan = ({children}: {children: string}) => {
    return <span style={{color: `#94A3B8`}}>{children}</span>;
  };

  const GetStartedButton = ({marginTop}: {marginTop?: number}) => {
    return (
      <Link style={{display: `block`, width: `fit-content`, alignSelf: !MQ_Full ? `center` : undefined}} to="/docs/getting-started">
        <FadeIn durationMs={1000}>
          <h1
            id={style.getStartedBt}
            style={{
              marginTop: marginTop,
              alignSelf: !MQ_Full ? 'center' : undefined,
              fontSize: MQ_Full ? 25 : 20
            }}>
            Get started
          </h1>
        </FadeIn>
      </Link>
    );
  };

  return (
    <>
      <Layout>
        {canShowAnimations && (
          <FadeIn delayMs={300}>
            <div id={style.lights} />
          </FadeIn>
        )}
        {canShowAnimations && (
          <FadeIn durationMs={2000} delayMs={500}>
            <div id={style.content}>
              <>
                <div style={{display: `flex`, flexDirection: MQ_Full ? `row` : 'column'}}>
                  <div style={{marginTop: MQ_Full ? 60 : undefined}}>
                    <SlideInUp durationMs={1200}>
                      <FadeIn delayMs={500}>
                        <h1 className={style.header1}>
                          Cross-Platform Input Handler <br /> for React and React Native
                        </h1>
                      </FadeIn>
                      <FadeIn durationMs={1300} delayMs={1300}>
                        <SlideInUp delayMs={1000}>
                          <h2 className={style.header2}>
                            Mouse<Gspan>,</Gspan> Touches<Gspan>,</Gspan> Keyboard <Gspan>and</Gspan> Gamepad
                          </h2>
                        </SlideInUp>
                      </FadeIn>
                    </SlideInUp>
                    {MQ_Full && <GetStartedButton marginTop={10} />}
                  </div>
                  <FadeIn style={{display: `flex`, marginLeft: MQ_Full ? `auto` : undefined, justifyContent: `center`, alignItems: `center`}} durationMs={500} delayMs={500}>
                    <div style={{alignSelf: 'center', backgroundImage: `url(${Devices})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, minWidth: `10min`, maxHeight: 600, width: MQ_Full ? `600px` : `380px`, aspectRatio: `1`}} />
                  </FadeIn>
                  {!MQ_Full && <GetStartedButton marginTop={-80} />}
                </div>
              </>
            </div>
          </FadeIn>
        )}
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
