import styles from './FaceBookButton.module.css';

export default function Button() {
    return (
        <div className={styles.faceBook}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7WZj///8mS5He4uzy9PghSJAdRo/R1+UsT5P7/P62vtQ4V5cpTZI0VJUkSpEvUZTj5+8+XJpGYp2OnL94ibSjrsrK0eCcqMbFzN2Hl7x7jLVvgq/w8veToMHT2eZddKdle6tQaKBUbaOzvNMAOYlhM6rsAAAEdElEQVR4nO3dYXOiOhiGYYhy0AYCAqJtrbbu/v/feGhdR8+erTwaQnizz/2p05kqVx1BIQlRfGlezsKonF+povMPbbNSRoWRUaum/U2YViaPQipXVXstrBPte5MGTyf1RdhkvjfHSVlzFtZhAjtifRK2ie8tcVaSfgmr8N6D53T1Kdwq39vhMNN2wiasw8R/y5tOuPK9FS7TqzjaGd9b4TQ1j8qwhaaMZiHvaLrXcEah9CiUH4Xyo1B+FMqPQvlRKD8K5Ueh/Cj0m9Y6z4ti0VV8lXd1v4zuOEk/XWFeZKaoDk29Wf9q81Y/v7y+Hz6qqFBGZdmiyPup0xTqQiXvm225jP/ccjkvZ+12Xb989BKnKCzMcbP/xvZ7T4u+R5ucUKtoU4I8iUJtDlucJ0+o1SG9yydNWET3vX7ihOb5bp8oYV60/R7JwsVx3s+RLDwNfAlYmD3yFpQkfBwoRFi8PAyUIcwPjwNFCLV+bC8qR5igXyOkCovaBihA+DmyLmxh8tBnNUHC/N0OOH2hmQUuzF8tgZMXGqsjhQCh/rAFTl24+BG4UGc2n9ckCO33M1MXZk+hC5Nd4EJ9tAdOW2jzrWL5q/ip6Hsaj8LFHWe4y6e314/qMjFEn+u/VupRqNBLTPN1lWRFrv+EmfIVUp2DwHVW2Mw88yjEdjTLd2U3s86fMMfOIR57dyU9+RMWGwRY9x4N+vInhD52l/9YP48/YYacoXm2nxrpUQh8+11a7UVP+RMq4BRNOsAcc39CAxzw17Y70sirEPhmMcQMZX9C5LvTcYBp9B6FwCmMIZ5n2sIhFrOYttD+eE+hyyikEI1Cd1FIIRqF7qKQQjQK3UUhhWgUuotCCtEotEpfRhT8P0h44+9PAxU8C6N+g2Uv/af93b6G383FHqyD57EY7oXA0quyhUtg02ULZ8DSq7KFLXDpRrbwBzAWRbbwDbgKLluIXAWXLUQWk5ctXIQu3CFbLloIbblo4RYZuChaiBwOZQuhkYuiha/BC/sX+hIuxEafShbuoBsASRbuoWFvkoXb4IXYCGLJQmwgv2QhcCpRuBC7i5NgITgZQ7CwxLZbsDANXtg/yVm6cINNqBEsBK6suRe6BIKHQ6dCHaX79PuAF/jGX+/34E0N3b6G2Y2bEv8ErnL/vHVXY3AjOFLBXRRSiEahuyikEI1Cd1FIIRqF7qKQQjQK3UUhhWgUuotCCtEodBeFFKJR6C4KKUSj0F0UUohGobsopBCNQndRSCEahe6ikEI0Ct1FIYVoFLqLQgrRKHQXhRSiUeguCilEo9BdFFKIRqG7KKQQ7a8QlsCi2A4aS2jKaBe2UM0jcEWpoRtJqFdxNMidk+9vJGHedMKtl13NSELTdkJoWezBG0eoq/hT2ELLZA7cOMIk/RLG9RC3h773uccQZnV8EsbN+MQxhFkTn4VxnYz9XnQv1EkdX4RxWplxDxquhbmq2vha2O1vmpUyt5aeGjbrlbBuZdSqac+Pcn1Tpnk5G6/dvLeHH7u8/vf9C+u7XqX2DOQ1AAAAAElFTkSuQmCC" height="15px" width="15px;" alt="fbLogo"></img>
            <button className={styles.btn}>Log In with Facebook</button>
        </div>
    )
}