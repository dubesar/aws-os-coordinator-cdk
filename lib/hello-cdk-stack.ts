import { aws_opensearchservice, Stack, StackProps } from 'aws-cdk-lib';
import { EngineVersion } from 'aws-cdk-lib/aws-opensearchservice';
import { Domain } from 'aws-cdk-lib/aws-opensearchservice';
import { Construct } from 'constructs';

export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domain = new Domain(this, 'Domain', {
      version: EngineVersion.OPENSEARCH_1_0,
      capacity: {
        masterNodes: 3,
        masterNodeInstanceType: 'm5.large.search',
        dataNodes: 3,
        dataNodeInstanceType: 'm5.large.search'
      },
      ebs: {
        volumeSize: 100
      },
      zoneAwareness: {
        availabilityZoneCount: 3
      }
    });
  
    const cfndomain = domain.node.defaultChild as aws_opensearchservice.CfnDomain;
    cfndomain.clusterConfig = {
      dedicatedMasterCount: 3,
      dedicatedMasterEnabled: true,
      dedicatedMasterType: 'm5.large.search',
      instanceCount: 3,
      instanceType: 'm5.large.search',
      nodeOptions: [
        {
          nodeConfig: {
            count: 3,
            enabled: true,
            type: 'c5.large.search',
          },
          nodeType: 'coordinator',
        },
      ],
      zoneAwarenessConfig: {
        availabilityZoneCount: 3,
      },
      zoneAwarenessEnabled: true,
    };
  }
}
