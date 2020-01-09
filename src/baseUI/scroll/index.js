/*
 * @Date: 2020-01-02 19:25:25
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-09 18:33:17
 * @content: I
 */
import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  useMemo
} from 'react';
import BScroll from 'better-scroll';
import { ScrollContainer, PullDownLoading, PullUpLoading } from './style';
import PropTypes from 'prop-types';
import Loading from '../loading';
import LoadingV2 from '../loading-v2';
import { debounce } from '../../api/utils';

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();
  const {
    direction,
    click,
    refresh,
    pullUp,
    pullDown,
    onScroll,
    bounceTop,
    bounceBottom,
    pullDownLoading,
    pullUpLoading
  } = props;
  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 300);
  }, [pullUp]);
  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 300);
  }, [pullDown]);

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', scroll => {
      onScroll(scroll);
    });
    return () => {
      bScroll.off('scroll');
    };
  }, [onScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    });
    return () => {
      bScroll.off('scrollEnd');
    };
  }, [pullUpDebounce, pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', pos => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce();
      }
    });
    return () => {
      bScroll.off('touchEnd');
    };
  }, [pullDownDebounce, pullDown, bScroll]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  const PullUpDisplayStyle = pullUpLoading
    ? { display: '' }
    : { display: 'none' };
  const PullDownDisplayStyle = pullDownLoading
    ? { display: '' }
    : { display: 'none' };

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      <PullUpLoading style={PullUpDisplayStyle}>
        <Loading></Loading>
      </PullUpLoading>
      <PullDownLoading style={PullDownDisplayStyle}>
        <LoadingV2></LoadingV2>
      </PullDownLoading>
    </ScrollContainer>
  );
});

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBotton: true
};

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool // 是否支持向上吸顶
};

export default Scroll;
